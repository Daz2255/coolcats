const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const Cat = require("./models/cat");

async function seed() {
  await Cat.create({
    name: "Felix",
    hasClaws: true,
    color: "orange",
    likes: ["sleeping in the sun", "sipping milk", "climbing tress"],
  });
  await Cat.create({
    name: "Cedrick",
    hasClaws: true,
    color: "pink",
    likes: ["sleeping in the sun", "sipping milk", "climbing tress"],
  });
  console.log("Go Kitty GO");
  mongoose.disconnect();
}

seed();
