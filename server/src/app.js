// Libraries importing
import express, { json } from "express";
import * as dotenv from "dotenv";
import path from "path";
import createError from "http-errors";

// CORS Policy
import cors from "cors"

// Routes import
import indexRouter from "./routes";
import giangVien2Router from "./routes/api/giangvien2";

// App initialization
const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 3000;

// App configuration
dotenv.config();
app.use(json());



app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/gv2", giangVien2Router);


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

