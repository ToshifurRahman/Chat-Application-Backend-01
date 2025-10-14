// external imports
const express = require('express');
const { check } = require('express-validator');

// internal imports
const { addUser, getUsers, removeUser } = require('../controller/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const avatarUpload = require('../middlewares/users/avatarUpload');
const {
    addUserValidators,
    addUserValidatorHandler,
} = require('../middlewares/users/userValidators');

const { checkLogin } = require('../middlewares/common/checkLogin');

const router = express.Router();

// Users page
router.get('/', decorateHtmlResponse('Users'), checkLogin, getUsers);

// add user
router.post('/', checkLogin, avatarUpload, addUserValidators, addUserValidatorHandler, addUser);

// remove user
router.delete('/:id', removeUser);

module.exports = router;
