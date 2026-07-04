import { useState } from 'react';

const InputLog = () => {
  
  const [formData, setFormData] = useState({
    weight: '',
    bloodPressure: '',
    bloodSugar: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => { 
    e.preventDefault(); 
    
  
    const token = localStorage.getItem('token');


    if (!token) {
      alert("Anda harus login terlebih dahulu!");
      return;
    }

    try {

      const response = await fetch("https://uasbackend-production-3bed.up.railway.app/api/logs", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(formData) 
      });

      const data = await response.json();

      if (response.ok) {
        alert("Berhasil: " + data.message);
   
        setFormData({ weight: '', bloodPressure: '', bloodSugar: '', notes: '' });
      } else {
        throw new Error(data.error || "Gagal menyimpan data");
      }

    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md mt-4">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Catat Kondisi Harian</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Berat Badan (kg)</label>
          <input 
            type="number" 
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Contoh: 70" 
            required 
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tensi (mmHg)</label>
            <input 
              type="text" 
              name="bloodPressure"
              value={formData.bloodPressure}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md" 
              placeholder="Contoh: 120/80" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gula Darah (mg/dL)</label>
            <input 
              type="number" 
              name="bloodSugar"
              value={formData.bloodSugar}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md" 
              placeholder="Contoh: 110" 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Keluhan atau Catatan Tambahan</label>
          <textarea 
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md h-24" 
            placeholder="Apa yang Anda rasakan hari ini?"
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold">
          Simpan Rekam Medis
        </button>
      </form>
    </div>
  );
};

export default InputLog;