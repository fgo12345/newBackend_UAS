const ActivityLogModel = require('../models/activityLogModel');

const loggerMiddleware = (req, res, next) => {
 
  res.on('finish', () => {

    const user = req.user ? req.user.username : 'Guest';
    const method = req.method;
    const endpoint = req.originalUrl;

    const time = new Date().toLocaleString('id-ID');
    console.log(`[${time}] User: ${user} accessed ${method} ${endpoint}`);
    
  
    ActivityLogModel.add(user, method, endpoint);
  });

  next();
};

module.exports = loggerMiddleware;