const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./Routes/Auth/authRoutes");

mongoose
  .connect("mongodb://localhost:27017")
  // "mongodb+srv://ganapathymano04:Mano@5858@cluster0.j6ueh.mongodb.net/"
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
