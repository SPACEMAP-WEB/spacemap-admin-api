const router = require("express").Router();
const ResourceFileController = require("../controllers/resourceFile");

router.get("/", async function (req, res) {
  res.json();
});
router.get("/:id", async function (req, res) {});
router.post("/", async function (req, res) {});
router.put("/:id", async function (req, res) {});
router.delete("/:id", async function (req, res) {});

module.exports = router;
