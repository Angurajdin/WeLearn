const mongoose = require("mongoose");

const meetingSchema = mongoose.Schema({
    title: String,
    conductedby : String,
    description: String,
    time: String,
    date: String,
    platform: String,
    duration: String,
    link: String
});

module.exports = mongoose.model("Meeting", meetingSchema);