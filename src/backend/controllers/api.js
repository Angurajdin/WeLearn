const User = require('../models/user')
const Meeting = require('../models/meeting')


module.exports = class API{

    static async login(req, res) {
        try {
            User.find({ Email: req.body.email }).then((currentUser)=>{
                console.log(currentUser);
                if (currentUser !== []) {
                    console.log(currentUser[0].password, req.body.password)
                    if (currentUser[0].password === req.body.password) {

                        console.log("Password match")
                        return res.status(200).json({'success':true, 'currentUser':currentUser.Name})
                        //return res.status(200).json({ currentUser: currentUser, message: "successfully"});
                    }
                    else {
                        console.log("password mismatch")
                        return res.status(200).json({'success':false, "message": "Invalid EmailID or Password"})
                    }
                }
                else {
                    console.log("Email mismatch")
                    return res.status(200).json({'success':false, "message": "Invalid EmailID or Password"})
                }
            })
                .catch((e)=>{
                    console.log("Email mismatch")
                    return res.status(200).json({'success':false, "message": "Invalid EmailID"})
                })
        } catch (error) {
            return res.status(200).json({'success':false,"message": "Invalid EmailID or Password"})
        }

    }

    static async signup(req, res) {
        try {
            console.log(req.body);
            await User.create(req.body);
            res.status(200).json({success: true});
        } catch (err) {
            res.status(200).json({"success": true, "message": "error on inserting", error: err.message});
        }
    }

    static async meeting(req, res){
        try {
            console.log(req.body);
            await Meeting.create(req.body);
            res.status(200).json({success: true});
        } catch (err) {
            res.status(200).json({"success": true, "message": "error on inserting", "error": err.message});
        }
    }

}