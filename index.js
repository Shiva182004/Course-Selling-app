const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);


async function main() {
    await mongoose.connect("mongodb+srv://shivasharmarag:aDsZyizhYtzCeW28@cluster1.sg6th.mongodb.net/coursera-app");
    app.listen(3000);
}

main();