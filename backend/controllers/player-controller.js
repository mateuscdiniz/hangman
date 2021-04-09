const express = require("express");
const router = express.Router();
const Player = require("../models/player");

// Create a player
router.post("/", async (req, res) => {
  try {
    let player = new Player(req.body);
    player = await player.save();
    res.status(201).json(player);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Find player
router.get("/", async (req, res) => {
  res.json(await Player.find());
});

module.exports = router;
