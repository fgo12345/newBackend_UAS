const express = require('express');
const router = express.Router();
const { register, login , getUsers} = require('../controllers/authController');
const authenticateToken = require('../middleware/authMiddleware');

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login  user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login berhasil , returns JWT Token
 *       401:
 *         description: Username/password salah
 */
router.post('/login', login);



/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Mendaftarkan user baru
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: tes@gmail.com
 *               password:
 *                 type: string
 *                 example: rahasia123
 *     responses:
 *       200:
 *         description: Registrasi berhasil
 *       400:
 *         description: Email sudah terdaftar
 *       500:
 *         description: Terjadi kesalahan
 */

router.post('/register', register);

router.get('/users', authenticateToken, getUsers);

module.exports = router;