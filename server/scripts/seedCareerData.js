require("dotenv").config();

const mongoose = require("mongoose");
const Career = require("../models/Career");
const careers = require("../data/careers.json");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Career.deleteMany({});

    await Career.insertMany(careers);

    console.log(
      `${careers.length} careers inserted successfully`
    );

    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });