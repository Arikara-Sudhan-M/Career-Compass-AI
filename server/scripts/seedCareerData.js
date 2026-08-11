require("dotenv").config();

const { connectDB } = require("../config/db");
const Career = require("../models/Career");
const careers = require("../data/careers.json");

(async () => {
  try {
    await connectDB();

    await Career.deleteAll();
    await Career.insertMany(careers);

    console.log(`${careers.length} careers inserted successfully`);
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();