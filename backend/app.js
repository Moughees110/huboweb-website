const cors = require("cors"); // Import CORS
const express = require("express");
const app = express();
const userRoutes = require("../backend/routes/user");
const connectDB = require("./config/db");

connectDB()
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});