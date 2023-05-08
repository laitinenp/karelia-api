'use strict';


/**
 * Returns a course
 *
 * courseId UUID 
 * returns Course
 **/
exports.apiCoursesCourseIdGET = function(courseId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "DD10004",
  "name" : "API Design & Development",
  "description" : "API Design & Development using REST, GraphQL and Open API",
  "learningObjectives" : "Student knows the most common API technologies in use today Student is able to comprehend the opportunities and challenges in exploiting API's in businesses Student is able to design, document and implement REST APIs Student is able to design, document and implement GraphQL APIs Student is is able to apply OpenAPI Specification in describing and designing APIs\n"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list of available courses
 *
 * returns List
 **/
exports.apiCoursesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "DD10004",
  "name" : "API Design & Development",
  "description" : "API Design & Development using REST, GraphQL and Open API",
  "learningObjectives" : "Student knows the most common API technologies in use today Student is able to comprehend the opportunities and challenges in exploiting API's in businesses Student is able to design, document and implement REST APIs Student is able to design, document and implement GraphQL APIs Student is is able to apply OpenAPI Specification in describing and designing APIs\n"
}, {
  "id" : "DD10004",
  "name" : "API Design & Development",
  "description" : "API Design & Development using REST, GraphQL and Open API",
  "learningObjectives" : "Student knows the most common API technologies in use today Student is able to comprehend the opportunities and challenges in exploiting API's in businesses Student is able to design, document and implement REST APIs Student is able to design, document and implement GraphQL APIs Student is is able to apply OpenAPI Specification in describing and designing APIs\n"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

