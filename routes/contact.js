const ContactCtrl = require("../controllers/contact");
const ContatModel = require("../models/contact");

module.exports = function (app, fs) {
  const router = require("express").Router();
  const application = app;
  router.get("/", async function (req, res) {
    let result = await ContactCtrl.read();
    return result;
  });

  router.get("/:id", async function (req, res) {
    let result = await ContactCtrl.readByID(req.params.user_id);
    return result;
  });

  router.post("/", async function (req, res) {
    console.log(req.body);
    let result = await ContactCtrl.create(
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

  return router;
};
