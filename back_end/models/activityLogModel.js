const db = require('../config/db');

const ActivityLogModel = {
  add: (username, method, endpoint) => {
    const query = 'INSERT INTO activity_logs (username, method, endpoint) VALUES (?, ?, ?)';
    
   
    db.query(query, [username, method, endpoint], (err, result) => {
      if (err) {
        console.error("Gagal menyimpan activity log ke database:", err.message);
      }
    });
  }
};

module.exports = ActivityLogModel;