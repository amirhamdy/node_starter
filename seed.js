const {Tour} = require("./models/tour");
const mongoose = require("mongoose");
const config = require("config");

const data = [
    {},
    {}
];

async function seed() {
    await mongoose.connect(config.get("db"));

    await Tour.deleteMany({});

    for (let tour of data) {
        await new Tour(tour).save();
    }

    await mongoose.disconnect();
    console.info("Done!");
}

seed();
