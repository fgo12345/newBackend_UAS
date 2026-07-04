const db = require('../config/db');

const LogModel = {
  add: (userId, weight, bloodPressure, bloodSugar, notes, callback) => {
    const query = 'INSERT INTO health_logs (user_id, weight, blood_pressure, blood_sugar, notes) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [userId, weight, bloodPressure, bloodSugar, notes], callback);
  },
  
  getSummary: (userId, callback) => {
    const query = 'SELECT * FROM health_logs WHERE user_id = ? ORDER BY created_at DESC LIMIT 1';
    db.query(query, [userId], callback);
  }
};

module.exports = LogModel;