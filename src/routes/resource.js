const router = require("express").Router();
// const ResourceController = require("../controllers/resource");

router.get("/", async function (req, res) {
  res.json();
});
router.get("/:id", async function (req, res) {});
router.post("/", async function (req, res) {});
router.put("/:id", async function (req, res) {});
router.delete("/:id", async function (req, res) {});

module.exports = router;
