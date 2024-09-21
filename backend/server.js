import dotenv from "dotenv";
import app from "./app.js";
import { dbConnect } from "./config/db.js";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  dbConnect();
});
