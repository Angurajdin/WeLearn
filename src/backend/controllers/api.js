const User = require("../models/user");
const Meeting = require("../models/meeting");
const Discussion = require("../models/discussion");

module.exports = class API {
  currentUserData = null;

  static async login(req, res) {
    try {
      User.find({ emailID: req.body?.emailID })
        .then((currentUser) => {
          if (currentUser !== []) {
            if (currentUser[0].password === req.body.password) {
              // console.log("Password match")
              API.currentUserData = currentUser[0];
              return res
                .status(200)
                .json({ success: true, currentUser: currentUser });
              //return res.status(200).json({ currentUser: currentUser, message: "successfully"});
            } else {
              // console.log("password mismatch");
              return res.status(200).json({
                success: false,
                message: "Invalid EmailID or Password",
              });
            }
          } else {
            // console.log("Email mismatch");
            return res
              .status(200)
              .json({ success: false, message: "Invalid EmailID or Password" });
          }
        })
        .catch((e) => {
          console.log(e);
          return res
            .status(200)
            .json({ success: false, message: "Invalid EmailID" });
        });
    } catch (error) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid EmailID or Password" });
    }
  }

  static async signup(req, res) {
    try {
      console.log(req.body);
      await User.find({ emailID: req.body.emailID })
        .then(async (user) => {
          console.log("user = ", user, typeof user);
          console.log("len =", user.length);
          if (user.length == 0) {
            await User.create(req.body);
            res.status(200).json({ success: true, currentUser: user });
          } else {
            res.status(200).json({
              success: false,
              message:
                "Email address is already exists, try with a different one",
            });
          }
        })
        .catch((err) => {
          res.status(200).json({ success: false, message: err.message });
        });
    } catch (err) {
      res.status(200).json({ success: false, message: "error on inserting" });
    }
  }

  static async meeting(req, res) {
    try {
      console.log(req.body);
      await Meeting.create(req.body);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(200).json({
        success: false,
        message: "error on inserting",
        error: err.message,
      });
    }
  }

  static async getMeeting(req, res) {
    try {
      await Meeting.find().then((data) => {
        res.status(200).json({ success: true, data: data });
      });
    } catch (err) {
      res
        .status(200)
        .json({ success: false, message: "error on getting data" });
    }
  }

  static async discussion(req, res) {
    try {
      await Discussion.create(req.body);
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(200).json({
        success: false,
        message: "error on inserting",
        error: err.message,
      });
    }
  }

  static async getQuestions(req, res) {
    try {
      await Discussion.find({
        topic: req.body.topic,
      })
        .sort({ posteddate: 1 })
        .then((data) => {
          res.status(200).json({ success: true, data: data });
        });
    } catch (err) {
      res
        .status(200)
        .json({ success: false, message: "error on getting data" });
    }
  }

  static async submitAnswer(req, res) {
    try {
      await Discussion.updateOne(
        { id: req.body.id },
        {
          $set: {
            answers: req.body.data,
          },
        }
      );
      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(200).json({
        success: false,
        message: "error on inserting",
        error: err.message,
      });
    }
  }
};
