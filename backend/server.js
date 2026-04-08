const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/lend", require("./routes/lendingRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));

// ✅ NEW START LOGIC
const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log("Server running on port", process.env.PORT);
    });
  } catch (err) {
    console.error(err);
  }
};

startServer();