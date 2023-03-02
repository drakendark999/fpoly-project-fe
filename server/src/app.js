// Libraries importing
const express = require("express");
require("dotenv").config();
const path = require("path");
const createError = require("http-errors");
const bodyParser = require("body-parser");
// CORS Policy
const cors = require("cors");

// Routes import
const indexRouter = require("./routes");
const giangVien2Router = require("./routes/api/giangvien2");
const lichThiRouter = require("./routes/api/lichThi");
const lichThi2Router = require("./routes/api/lichThi2");
const phongThiRouter = require("./routes/api/phong");

// App initialization
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// App configuration
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.use("/", indexRouter);
app.use("/api/gv2", giangVien2Router);
app.use("/api/lichthi", lichThiRouter);
app.use("/api/lichthi2", lichThi2Router);
app.use("/api/phong", phongThiRouter);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
