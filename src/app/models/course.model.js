const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: String,
      required: true,
      trim: true,
    },
    level: {
      type: String,
      required: true,
      trim: true,
    },
    topics: {
      type: [String],
      required: true,
      trim: true,
    },
    schedule: {
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      classDays: {
        type: [String],
        required: true,
      },
      classTime: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Course = model("Course", courseSchema);

module.exports = Course;
