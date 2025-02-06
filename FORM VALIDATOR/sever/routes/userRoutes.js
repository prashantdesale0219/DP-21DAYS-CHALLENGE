const express = require('express');
const { registerUser, getAllUsers,  deleteUser } = require('../controllers/userController');
const { loginUser } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);
router.delete('/:id', deleteUser);

module.exports = router;
