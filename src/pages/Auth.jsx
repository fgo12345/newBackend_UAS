import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
 const apiBase = "https://uasbackend-production-3bed.up.railway.app";


  const toggleIsRegister = () => {
    setIsRegister(!isRegister);
    setErrorMsg(''); 
  };

  const authenticate = async () => {
    if (isLoading || !email || !password || password.length < 6 ) {
      setErrorMsg("username tidak valid atau password kurang dari 6 karakter");
      return;
    }

    setErrorMsg('');
    setIsLoading(true);

    try {
      let data;
      const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
      
      const response = await fetch(apiBase + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password: password }) 
      });
      
      data = await response.json();

      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        throw new Error(data.message || ' Failed to authenticate...');
      }

    } catch (err) {
      console.log(err.message);
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="auth" className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold sign-up-text">
            {isRegister ? 'Sign Up' : 'Login'}
          </h2>
          <p className="text-gray-600">
            {isRegister ? 'Buatlah akun' : 'Selamat datang'}
          </p>
        </div>

        {errorMsg && (
          <p id="error" className="text-red-500 mb-4 text-sm text-center font-semibold">
            {errorMsg}
          </p>
        )}

        <div className="space-y-4">
          <input 
            id="emailInput" 
            placeholder="username" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input 
            id="passwordInput" 
            placeholder="********" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button 
            id="authBtn" 
            onClick={authenticate}
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Authenticating...' : 'Submit'}
          </button>
        </div> 

        <hr className="my-6" />

        <div className="register-content text-center">
          <p className="text-sm text-gray-600 mb-2">
            {isRegister ? 'Sudah punya akun?' : "Tidak punya akun?"}
          </p>
          <button 
            onClick={toggleIsRegister} 
            id="registerBtn"
            className="text-blue-600 font-bold hover:underline"
          >
            {isRegister ? 'Sign in' : 'Sign up'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Auth;