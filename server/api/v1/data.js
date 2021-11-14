const express = require("express");
const createError = require("http-errors");

const DOCUMENTATION = require("../../documentation.js");

const Backgrounds = require("../../data/backgrounds.js");
const CombatActions = require("../../data/combat_actions.js");
const SkillChecks = require("../../data/skill_checks.js");
const Skills = require("../../data/skills.js");
const Strains = require("../../data/strains.js");
const Traits = require("../../data/traits.js");

const router = express.Router();

router.get("/documentation", (req, res) => {
  res.send({DOCUMENTATION});
});

router.get("/backgrounds", (req, res) => {
  res.send({Backgrounds});
});

router.get("/combatactions", (req, res) => {
  res.send({CombatActions});
});

router.get("/skillchecks", (req, res) => {
  res.send({SkillChecks});
});

router.get("/skills", (req, res) => {
  res.send({Skills});
});

router.get("/strains", (req, res) => {
  res.send({Strains});
});

router.get("/traits", (req, res) => {
  res.send({Traits});
});


module.exports = router;
