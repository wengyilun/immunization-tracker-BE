'use strict';

module.exports = (request, response, next) => {
  if (request.body.username && request.body.password && request.body.department) {
    next();
  } else {
    response.status(400).json({
      message: 'Please provide a username, password and department name!'
    });
  }
};