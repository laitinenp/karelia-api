'use strict';

var utils = require('../utils/writer.js');
var Services = require('../service/ServicesService');

module.exports.apiServicesService_idGET = function apiServicesService_idGET (req, res, next, service_id) {
  Services.apiServicesService_idGET(service_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
