import { useState, useEffect } from 'react';
import { Pill, CheckCircle, Circle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Medications = () => {
  const navigate = useNavigate();
  const [medications, setMedications] = useState([]);
  const [formData, setFormData] = useState({ medName: '', dosage: '', scheduleTime: '' });


  const fetchMedications = async () => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/auth');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/medications`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setMedications(data);
      }
    } catch (error) {
      console.error("Gagal mengambil data obat:", error);
    }
  };

  useEffect(() => {
    fetchMedications();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/medications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({ medName: '', dosage: '', scheduleTime: '' }); 
        fetchMedications(); 
      } else {
        alert("Gagal menambah jadwal obat");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const toggleTaken = async (id, currentStatus) => {
    const token = localStorage.getItem('token');
   
    const newStatus = currentStatus ? 0 : 1; 

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/medications/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ is_taken: newStatus })
      });

      if (response.ok) {
        fetchMedications();
      }
    } catch (error) {
      console.error("Error update status:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 mt-4 animate-fade-in-up">
      
    
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
        <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
          <Pill className="text-blue-500" /> Tambah Jadwal Obat
        </h2>
        
        <form onSubmit={handleSubmit} className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Nama Obat</label>
            <input type="text" required value={formData.medName} onChange={e => setFormData({...formData, medName: e.target.value})} className="w-full mt-1 p-2 border border-gray-300 rounded-md" placeholder="Cth: Paracetamol" />
          </div>
          <div className="w-1/4">
            <label className="block text-sm font-medium text-gray-700">Dosis</label>
            <input type="text" required value={formData.dosage} onChange={e => setFormData({...formData, dosage: e.target.value})} className="w-full mt-1 p-2 border border-gray-300 rounded-md" placeholder="Cth: 1 Butir" />
          </div>
          <div className="w-1/4">
            <label className="block text-sm font-medium text-gray-700">Waktu</label>
            <input type="time" lang="id-ID" required value={formData.scheduleTime} onChange={e => setFormData({...formData, scheduleTime: e.target.value})} className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 font-semibold h-[42px]">
            Tambah
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Jadwal Hari Ini</h2>
        
        {medications.length === 0 ? (
          <p className="text-gray-500 text-center py-4">Belum ada jadwal obat.</p>
        ) : (
          <div className="space-y-3">
            {medications.map((med) => (
              <div key={med.id} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${med.is_taken ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'}`}>
                
                <div className="flex items-center gap-4">
                
                  <button onClick={() => toggleTaken(med.id, med.is_taken)} className="focus:outline-none">
                    {med.is_taken ? (
                      <CheckCircle className="text-green-500 w-8 h-8" />
                    ) : (
                      <Circle className="text-gray-400 w-8 h-8 hover:text-blue-500 transition-colors" />
                    )}
                  </button>
                  
                  <div>
                    <h3 className={`font-bold text-lg ${med.is_taken ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                      {med.med_name}
                    </h3>
                    <p className={`text-sm ${med.is_taken ? 'text-gray-400' : 'text-gray-600'}`}>
                      Dosis: {med.dosage}
                    </p>
                  </div>
                </div>

                <div className={`flex items-center gap-1 font-semibold ${med.is_taken ? 'text-gray-400' : 'text-blue-600'}`}>
                  <Clock size={18} />
                  <span>{med.schedule_time.slice(0, 5)}</span>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Medications;