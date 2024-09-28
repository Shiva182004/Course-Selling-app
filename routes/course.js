const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/course/purchase", function(req, res) {
    res.json({
        message:"signin endpoint"
    })
});

courseRouter.get("/course", function(req, res) {
    res.json({
        message:"signin endpoint"
    })
});

module.exports = {
    courseRouter: courseRouter
}