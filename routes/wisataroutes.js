// routes/wisataRoutes.js
const express = require('express');
const { getAll, create, update, delete: deleteWisata } = require('../controllers/wisatacontroller');
const authMiddleware = require('../middlewares/authmiddleware');
const roleMiddleware = require('../middlewares/rolemiddleware');

const router = express.Router();

// Route untuk mendapatkan semua data wisata, tidak membutuhkan autentikasi
router.get('/', getAll);

// Route untuk membuat data wisata, hanya untuk admin
// authMiddleware memastikan pengguna terautentikasi
// roleMiddleware('admin') memastikan pengguna memiliki peran 'admin'
router.post('/', authMiddleware, roleMiddleware('admin'), create);

// Route untuk mengupdate data wisata, hanya untuk admin
// authMiddleware memastikan pengguna terautentikasi
// roleMiddleware('admin') memastikan pengguna memiliki peran 'admin'
router.put('/:id', authMiddleware, roleMiddleware('admin'), update);

// Route untuk menghapus data wisata, hanya untuk admin
// authMiddleware memastikan pengguna terautentikasi
// roleMiddleware('admin') memastikan pengguna memiliki peran 'admin'
router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteWisata);

module.exports = router;
