const dotenv = require("dotenv");
const connectDB = require("../config/db");

const Roadmap = require("../models/Roadmap");

const roadmaps = require("../data/roadmaps.json");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Roadmap.deleteMany();

    await Roadmap.insertMany(roadmaps);

    console.log("✅ All 150 Roadmaps Imported Successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();