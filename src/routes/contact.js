const ContactController = require("../controllers/contact");
const ContatModel = require("../models/contact");

const router = require("express").Router();
const application = app;
router.get("/", async function (req, res) {});

router.get("/:id", async function (req, res) {
  let result = await ContactController.readByID(req.params.id);
  return result;
});

router.post("/", async function (req, res) {
  console.log(req.body);
  let result = await ContactController.create(
    req.body.name,
    req.body.email,
    req.body.subject,
    req.body.message
  );
  console.log(result);
  res.json(result);
});

router.put("/:id", async function (req, res) {});
router.delete("/:id", async function (req, res) {});

module.exports = router;
