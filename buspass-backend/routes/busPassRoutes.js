const express = require("express");
const router = express.Router();
const BusPass = require("../models/BusPass");

// Create Bus Pass
router.post("/", async (req, res) => {
    try {
        const newPass = new BusPass(req.body);
        await newPass.save();
        res.status(201).json(newPass);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get All Bus Passes
router.get("/", async (req, res) => {
    const passes = await BusPass.find();
    res.json(passes);
});

// Update Status
router.put("/:id", async (req, res) => {
    const updated = await BusPass.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updated);
});

// Delete Pass
router.delete("/:id", async (req, res) => {
    await BusPass.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
});

module.exports = router;