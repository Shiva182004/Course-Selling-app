const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const JWT_ADMIN_PASSWORD = "123l123l123l";
const jwt = require("jsonwebtoken");

adminRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "Signup Succeeded"
    })
});

adminRouter.post("/signin", async function(req, res) {
    const {email, password} = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password: password
    })

    if(admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
});

adminRouter.post("/course", function(req, res) {
    res.json({
        message:"signin endpoint"
    })
});

adminRouter.put("/course", function(req, res) {
    res.json({
        message:"signin endpoint"
    })
});

adminRouter.get("/course/bulk", function(req, res) {
    res.json({
        message:"signin endpoint"
    })
});

module.exports = {
    adminRouter: adminRouter
}