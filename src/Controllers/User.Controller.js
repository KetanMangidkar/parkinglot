const express = require('express');
const crud = require('./Controller');
const User = require("../Models/User.Model")
const router = express.Router();

router.post("", crud(User).Post);
router.get("", crud(User).Get);
router.get("/:id", crud(User).GetOne);
router.delete("/:id", crud(User).Delete);
router.patch("/:id", crud(User).Patch);

module.exports = router;