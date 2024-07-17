// routes/wisataRoutes.js
const express = require('express');
const { getAll, create, update, delete: deleteWisata } = require('../controllers/wisatacontroller');
const authMiddleware = require('../middlewares/authmiddleware');
const roleMiddleware = require('../middlewares/rolemiddleware');

const router = express.Router();

router.get('/', getAll);
router.post('/', authMiddleware, roleMiddleware('admin'), create);
router.put('/:id', authMiddleware, roleMiddleware('admin'), update);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteWisata);

module.exports = router;
