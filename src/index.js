import express from "express";
import users from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use("/users", users);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
