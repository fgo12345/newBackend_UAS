const LogModel = require('../models/logModel');

const addLog = (req, res) => {
  const { weight, bloodPressure, bloodSugar, notes } = req.body;
  const userId = req.user.id;

  LogModel.add(userId, weight, bloodPressure, bloodSugar, notes, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Data medis berhasil disimpan!" });
  });
};

const getHealthSummary = (req, res) => {
  const userId = req.user.id;
  
  LogModel.getSummary(userId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    
    if (results.length === 0) {
      return res.json({ message: "Belum ada data", data: null });
    }

    res.json({
      weight: results[0].weight,
      bloodPressure: results[0].blood_pressure,
      bloodSugar: results[0].blood_sugar
    });
  });
};

module.exports = { addLog, getHealthSummary };