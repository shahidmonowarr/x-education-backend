const Course = require("../models/course.model");

exports.createCourse = async (payload) => {
  const newCourse = await Course.create(payload);

  if (!newCourse) {
    throw new Error("Error creating course");
  }

  return newCourse;
};

exports.getAllCourses = async () => {
  const courses = await Course.find();

  if (!courses) {
    throw new Error("Error getting courses");
  }

  return courses;
};

exports.getCourseById = async (id) => {
  const course = await Course.findById(id);

  if (!course) {
    throw new Error("Error getting course");
  }

  return course;
};

exports.updateCourseById = async (id, payload) => {
  const course = await Course.findById(id);

  if (!course) {
    throw new Error("Error updating course");
  }

  const result = await Course.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

exports.deleteCourseById = async (id) => {
  const course = await Course.findById(id);

  if (!course) {
    throw new Error("Error deleting course");
  }

  const result = await Course.findByIdAndDelete(id);

  return result;
};
