

const express = require('express');
const router = express.Router();
const Spot = require('../Models/Spot.Model');
const crud = require('./Controller');

router.post("", crud(Spot).Post);
router.get("", crud(Spot).Get);
router.get("/:id", crud(Spot).GetOne);
router.delete("/:id", crud(Spot).Delete);
router.patch("/:id", crud(Spot).Patch);

module.exports = router;