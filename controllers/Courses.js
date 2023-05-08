'use strict';

var utils = require('../utils/writer.js');
var Courses = require('../service/CoursesService');

module.exports.apiCoursesCourseIdGET = function apiCoursesCourseIdGET (req, res, next, courseId) {
  Courses.apiCoursesCourseIdGET(courseId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCoursesGET = function apiCoursesGET (req, res, next) {
  Courses.apiCoursesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
