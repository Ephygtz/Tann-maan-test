const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const userController = require('../controllers/userController');

// Validation middleware
const validateUserData = [
  check('fullName')
    .notEmpty()
    .withMessage('Full name is required'),
  
  check('phoneNumber')
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[0-9+\-\s()]+$/)
    .withMessage('Please enter a valid phone number'),
  
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email address')
];

// Routes
router.post('/', validateUserData, userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

module.exports = router;