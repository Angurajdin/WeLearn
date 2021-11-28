const mongoose = require("mongoose");

const discussionSchema = mongoose.Schema({
    question : String,
    topic : String,
    posteddate : String,
    doubtperson : String,
    answers: Array,
    correctAnswers: Array
});

module.exports = mongoose.model("discussion", discussionSchema);