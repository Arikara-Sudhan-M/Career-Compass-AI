const dotenv = require("dotenv");

const { connectDB } = require("../config/db");
const Roadmap = require("../models/Roadmap");
const roadmaps = require("../data/roadmaps.json");

dotenv.config();

const importData = async () => {
  try {
    await connectDB();

    await Roadmap.deleteAll();
    await Roadmap.insertMany(roadmaps);

    console.log("Roadmap Data Imported Successfully ✅");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();