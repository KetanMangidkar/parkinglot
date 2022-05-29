

const express = require('express');
const crud = require('./Controller');
const router = express.Router();
const Floor = require('../Models/Floor.Model')

router.post("", crud(Floor).Post);
router.get("", crud(Floor).Get);
router.get("/:id", crud(Floor).GetOne);
router.delete('/:id', crud(Floor).Delete);
router.patch("/:id", crud(Floor).Patch);

module.exports = router;