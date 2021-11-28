const express = require('express');
const router = express.Router()
const API = require('../controllers/api');


router.post('/', API.login)
router.post('/signup',  API.signup)
router.post('/meeting',  API.meeting)
router.get('/meeting',  API.getMeeting)
router.post("/getQuestions", API.getQuestions);
router.post('/discussion', API.discussion)
router.post("/submitAnswer", API.submitAnswer);
module.exports = router;