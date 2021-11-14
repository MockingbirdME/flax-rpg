const createError = require("http-errors");
const express = require("express");
const path = require("path");
const YAML = require('yamljs');

const router = express.Router();

// Provide very general information about the API.
router.get("/info", (req, res) => {
  res.json({
    message: "Welcome to Flax RRG's V1 API!",
    apiVersion: 1,
    apiBaseUrl: req.originalUrl
  });
});

// Configure SwaggerUI
const apiSpec = YAML.load(path.resolve(__dirname, "spec.yml"));
router.get("/spec", (req, res, next) => {
  // Return the spec.
  if (req.accepts("json")) res.json(apiSpec);
  else if (req.accepts("application/yaml")) res.send(YAML.stringify(apiSpec, 4));
  else
    next(createError(501, "API Spec not yet available in the requested format."));
});

// Route  '/data'
router.use('/data', require('./data'));


// Return a 404 error if no matching API endpoint is found.
router.use((req, res, next) => next(createError(404, `No such API endpoint: ${req.method} ${req.url}`)));

// API-specific error handler
router.use((error, req, res) => {
  /**
   * Make sure that error is an error with the necessary HTTP Errors fields.
   * @type {Error}
   */
  error = createError(error);
  console.log(error);

  // Send the error back with the appropriate status.
  // TODO Make this more useful and filter appropriately.
  res.status(error.statusCode).json(error);
});

module.exports = router;
