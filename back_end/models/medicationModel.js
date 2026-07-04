const db = require('../config/db');

const MedicationModel = {
  add: (userId, medName, dosage, scheduleTime, callback) => {
    const query = 'INSERT INTO medications (user_id, med_name, dosage, schedule_time, is_taken) VALUES (?, ?, ?, ?, 0)';
    db.query(query, [userId, medName, dosage, scheduleTime], callback);
  },
  
  getAllByUser: (userId, callback) => {
    const query = 'SELECT * FROM medications WHERE user_id = ? ORDER BY schedule_time ASC';
    db.query(query, [userId], callback);
  },

  updateStatus: (isTaken, medId, userId, callback) => {
    const query = 'UPDATE medications SET is_taken = ? WHERE id = ? AND user_id = ?';
    db.query(query, [isTaken, medId, userId], callback);
  }
};

module.exports = MedicationModel;