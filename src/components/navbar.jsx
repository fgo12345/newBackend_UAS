import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Activity, LogOut, LogIn } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  

  const token = localStorage.getItem('token');

  const isActive = (path) => {
    return location.pathname === path 
      ? "bg-white text-blue-700 px-4 py-2 rounded-full font-bold shadow-md transition-all" 
      : "text-white hover:bg-white/20 px-4 py-2 rounded-full transition-all";
  };


  const handleLogout = () => {
    localStorage.removeItem('token'); n
    navigate('/auth'); 
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="flex items-center text-white text-2xl font-extrabold tracking-wide gap-2">
          <div className="bg-white text-blue-600 p-1.5 rounded-lg shadow-sm">
            <Activity size={28} />
          </div>
        </Link>
        
        <div className="flex gap-2 md:gap-4 text-sm md:text-base font-medium items-center bg-black/10 p-1.5 rounded-full">
          {/* Conditional Rendering: If token exists, show the app links and Logout */}
          {token ? (
            <>
              <Link to="/" className={isActive('/')}>Dashboard</Link>
              <Link to="/input" className={isActive('/input')}>Catat Medis</Link>
              <Link to="/obat" className={isActive('/obat')}>Jadwal Obat</Link>
              <Link to="/chat" className={isActive('/chat')}>Chat</Link>
              
              <button 
                onClick={handleLogout}
                className="flex items-center gap-1 text-white hover:bg-red-500 hover:text-white px-4 py-2 rounded-full transition-all font-bold ml-2"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          ) : (
            /* If no token exists, ONLY show the Login / Sign up button */
            <Link to="/auth" className="flex items-center gap-2 bg-white text-blue-600 px-5 py-2 rounded-full font-bold shadow-md hover:bg-gray-100 transition-all">
              <LogIn size={18} /> Login / Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;