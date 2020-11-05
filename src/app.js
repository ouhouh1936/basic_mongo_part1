import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import Lecture from "./models/Lecture";

// 192.168.219.191/admin

const PORT = 7000;

const app = express();
app.use(morgan(`dev`));

mongoose.connect(
  `mongodb://4leaf:fourleaf0309@192.168.219.191:27017/admin`,
  {
    dbName: `EDU_1`,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.log("Failed To DB Connect");
    } else {
      console.log("✅ CUNNECT TO DB! ✅");
    }
  }
);
app.get("/", async (req, res) => {
  console.log("🐶CALLED BY USER");

  const result = await Lecture.find({}, {});

  console.log(result);
});

app.listen(PORT, () => {
  console.log(`${PORT} server start`);
});
