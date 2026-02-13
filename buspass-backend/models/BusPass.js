const mongoose = require("mongoose");

const busPassSchema = new mongoose.Schema({
    name: { type: String, required: true },
    college: { type: String, required: true },
    route: { type: String, required: true },
    duration: { type: String, required: true },
    status: { type: String, default: "Pending" }
}, { timestamps: true });

module.exports = mongoose.model("BusPass", busPassSchema);