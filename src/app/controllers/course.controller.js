const { sendRes } = require("../../utilities/sendRes");
const { tryCatch } = require("../../utilities/tryCatch");
const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
} = require("../services/course.service");

exports.createCourse = tryCatch(async (req, res) => {
  const course = await createCourse(req.body);

  sendRes(res, {
    statusCode: 201,
    success: true,
    message: "Course has been added successfully",
    data: course,
  });
});

exports.getAllCourses = tryCatch(async (req, res) => {
  const courses = await getAllCourses();

  sendRes(res, {
    statusCode: 200,
    success: true,
    message: "Courses have been fetched successfully",
    data: courses,
  });
});

exports.getCourseById = tryCatch(async (req, res) => {
  const course = await getCourseById(req.params.id);

  sendRes(res, {
    statusCode: 200,
    success: true,
    message: "Course has been fetched successfully",
    data: course,
  });
});

exports.updateCourseById = tryCatch(async (req, res) => {
  const course = await updateCourseById(req.params.id, req.body);

  sendRes(res, {
    statusCode: 200,
    success: true,
    message: "Course has been updated successfully",
    data: course,
  });
});

exports.deleteCourseById = tryCatch(async (req, res) => {
  const course = await deleteCourseById(req.params.id);

  sendRes(res, {
    statusCode: 200,
    success: true,
    message: "Course has been deleted successfully",
    data: course,
  });
});
