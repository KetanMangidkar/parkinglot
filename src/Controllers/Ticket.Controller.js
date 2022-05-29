const express = require("express");
const router = express.Router();
const Ticket = require("../Models/Ticket.Model");
const crud = require("./Controller");

router.post("", crud(Ticket).Post);
router.get("", crud(Ticket).Get);
router.delete("/:id", crud(Ticket).Delete);
router.patch("/:id", crud(Ticket).Patch);

router.get("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findOne({ ticket_id: req.params.id })
      .populate([{ path: "spot_id", populate: { path: 'floor_id' } }, { path: "user_id" }])
      .lean()
      .exec();
    return res.send(ticket);
  } catch (err) {
    return res.attachment(500).send({ Error: err.message });
  }
});
module.exports = router;