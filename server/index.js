const DOCUMENTATION = require("./documentation.js");
const CombatActions = require("./data/combat_actions.js");
const SkillChecks = require("./data/skill_checks.js");
const Skills = require("./data/skills.js");
const Strains = require("./data/strains.js");
const Traits = require("./data/traits.js");
// const Spec = require("./data/spec.yaml");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const createError = require('http-errors');

const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');

console.log(path.resolve(__dirname, './data/spec.yaml'));
console.log('WTF');
const swaggerDoc = YAML.load(path.resolve(__dirname, './api/v1-old/spec.yaml'));
const swaggerOpts = {customCss: '.servers {display: none}'};

// Parse queries and parameters.
const PAYLOAD_LIMIT = '5mb';
app.use(express.json({limit: PAYLOAD_LIMIT}));
app.use(express.urlencoded({extended: false, limit: PAYLOAD_LIMIT}));

app.listen(port, () => console.log(`Listening on port ${port} TEST`));

app.use(express.static("client/build", {index: false}));

app.get('/api-docs/swagger.json', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", req.method);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json(swaggerDoc);
});
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc, swaggerOpts));

// Connect the API
// app.use('/api/v1', require('./api/v1/index'));
app.use('/api', (req, res, next) => next(createError(404, "You must specify a valid API version. Ex: `/api/v1`.")));


// Return old items until they're properly added to the API
app.get("/documentation", (req, res) => {
  res.send({DOCUMENTATION});
});

app.get("/combatactions", (req, res) => {
  res.send({CombatActions});
});

app.get("/skillchecks", (req, res) => {
  res.send({SkillChecks});
});

app.get("/skills", (req, res) => {
  res.send({Skills});
});

app.get("/strains", (req, res) => {
  res.send({Strains});
});

app.get("/traits", (req, res) => {
  res.send({Traits});
});

// For any other request, let React handle it.
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});
