const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const { addMedication, getMedications, updateMedication } = require('../controllers/medicationController');

/**
 * @swagger
 * /api/medications:
 *   post:
 *     summary: Add a new medication schedule
 *     tags: [Medications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               medName:
 *                 type: string
 *                 example: "Paracetamol"
 *               dosage:
 *                 type: string
 *                 example: "1 Butir"
 *               scheduleTime:
 *                 type: string
 *                 format: time
 *                 example: "14:00"
 *     responses:
 *       200:
 *         description: Jadwal obat berhasil ditambahkan
 *       401:
 *         description: Akses ditolak! Anda belum login
 *       500:
 *         description: Server error
 */
router.post('/', authenticateToken, addMedication);

/**
 * @swagger
 * /api/medications:
 *   get:
 *     summary: ambil semua obat untuk user yang sudah login
 *     tags: [Medications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of medications
 *       401:
 *         description: Akses ditolak! Anda belum login
 *       500:
 *         description: Server error
 */
router.get('/', authenticateToken, getMedications);

/**
 * @swagger
 * /api/medications/{id}:
 *   put:
 *     summary: update status obat
 *     tags: [Medications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The medication ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               is_taken:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Status obat berhasil diperbarui
 *       401:
 *         description: Akses ditolak! Anda belum login
 *       500:
 *         description: Server error
 */
router.put('/:id', authenticateToken, updateMedication);

module.exports = router;