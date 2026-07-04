import { useState, useEffect } from 'react';
import { Heart, Scale, Droplet } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

const Dashboard = () => {
  const navigate = useNavigate();
 
  const [username, setUsername] = useState('Pengguna');
  const [healthSummary, setHealthSummary] = useState({
    weight: 0, height: 0, bloodPressure: '-', bloodSugar: 0, isLoading: true
  });

  useEffect(() => {
    const fetchHealthData = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          navigate('/auth');
          return;
        }

        try {
        
          const payloadBase64 = token.split('.')[1];
          
          const decodedPayload = JSON.parse(window.atob(payloadBase64));
          
          let name = decodedPayload.username || 'Pengguna';
          
           
          if (name.includes('@')) {
            name = name.split('@')[0];
          }
          
          
          name = name.charAt(0).toUpperCase() + name.slice(1);
          setUsername(name);
        } catch (decodeError) {
          console.error("Gagal membaca token:", decodeError);
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/health-summary`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        });

        const data = await response.json();

        if (response.ok) {
          setHealthSummary({
            weight: data.weight || 0,
            height: 170, 
            bloodPressure: data.bloodPressure || '-',
            bloodSugar: data.bloodSugar || 0,
            isLoading: false
          });
        } else {
          console.error("Gagal mengambil data:", data.message);
          setHealthSummary(prev => ({ ...prev, isLoading: false }));
        }

      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        setHealthSummary(prev => ({ ...prev, isLoading: false }));
      }
    };

    fetchHealthData();
  }, [navigate]);

  const calculateBMI = (w, h) => {
    if (!w || !h) return 0;
    return (w / Math.pow(h / 100, 2)).toFixed(1);
  };

  if (healthSummary.isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex justify-between items-center">
        <div>
          {/* 3. Inject the username state into your greeting */}
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
            Halo {username}, Apa Kabar Hari Ini?
          </h1>
          <p className="text-gray-500 mt-1">Berikut adalah ringkasan kesehatan Anda.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-6 rounded-3xl shadow-lg text-white transform hover:-translate-y-2 transition-all duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-emerald-50 font-medium">Indeks Massa Tubuh</p>
              <h2 className="text-5xl font-bold mt-2 drop-shadow-md">
                {calculateBMI(healthSummary.weight, healthSummary.height)}
              </h2>
            </div>
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
              <Scale size={36} className="text-white" />
            </div>
          </div>
          <div className="mt-6 bg-black/10 py-2 px-4 rounded-xl inline-block text-sm font-semibold">
            Status: Ideal 
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-400 to-red-500 p-6 rounded-3xl shadow-lg text-white transform hover:-translate-y-2 transition-all duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-rose-100 font-medium">Tekanan Darah</p>
              <h2 className="text-5xl font-bold mt-2 drop-shadow-md">{healthSummary.bloodPressure}</h2>
            </div>
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
              <Heart size={36} className="text-white" />
            </div>
          </div>
          <div className="mt-6 bg-black/10 py-2 px-4 rounded-xl inline-block text-sm font-semibold">
            mmHg (Normal) 
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-6 rounded-3xl shadow-lg text-white transform hover:-translate-y-2 transition-all duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-amber-50 font-medium">Gula Darah Terakhir</p>
              <h2 className="text-5xl font-bold mt-2 drop-shadow-md">{healthSummary.bloodSugar}</h2>
            </div>
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
              <Droplet size={36} className="text-white" />
            </div>
          </div>
          <div className="mt-6 bg-black/10 py-2 px-4 rounded-xl inline-block text-sm font-semibold">
            mg/dL 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;