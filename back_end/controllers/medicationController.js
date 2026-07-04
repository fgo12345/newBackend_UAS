const MedicationModel = require('../models/medicationModel');

const addMedication = (req, res) => {
  const { medName, dosage, scheduleTime } = req.body;
  const userId = req.user.id;

  MedicationModel.add(userId, medName, dosage, scheduleTime, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Jadwal obat berhasil ditambahkan!" });
  });
};

const getMedications = (req, res) => {
  const userId = req.user.id;
  
  MedicationModel.getAllByUser(userId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

const updateMedication = (req, res) => {
  const medId = req.params.id;
  const userId = req.user.id;
  const { is_taken } = req.body; 

  MedicationModel.updateStatus(is_taken, medId, userId, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Status obat berhasil diperbarui!" });
  });
};

module.exports = { addMedication, getMedications, updateMedication };