const express = require ('express');
const router = express.Router();
const controller = require ('./controller');
const { model } = require('mongoose');

router.get('./users', controller.getUsers);
router.get('./creatuser', controller.addUser);
router.get('./updateuser', controller.updateUser);
router.get('./deleteuser', controller.deleteUser);

model.exports = router;
