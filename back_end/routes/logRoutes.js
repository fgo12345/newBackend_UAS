const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const { addLog, getHealthSummary } = require('../controllers/logController');

/**
 * @swagger
 * /api/logs:
 *   post:
 *     summary: menambahkan daily health log
 *     tags: [Health Logs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               weight:
 *                 type: number
 *                 example: 70
 *               bloodPressure:
 *                 type: string
 *                 example: "120/80"
 *               bloodSugar:
 *                 type: number
 *                 example: 110
 *               notes:
 *                 type: string
 *                 example: "Merasa sedikit pusing setelah makan."
 *     responses:
 *       200:
 *         description: Data medis berhasil disimpan
 *       401:
 *         description: Akses ditolak! Anda belum login
 *       500:
 *         description: Server error
 */
router.post('/logs', authenticateToken, addLog);

/**
 * @swagger
 * /api/health-summary:
 *   get:
 *     summary: health summary di dashboard
 *     tags: [Health Logs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved the latest health data
 *       401:
 *         description: Akses ditolak! Anda belum login
 *       500:
 *         description: Server error
 */
router.get('/health-summary', authenticateToken, getHealthSummary);

module.exports = router;