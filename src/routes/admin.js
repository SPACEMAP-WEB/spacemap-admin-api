const router = require("express").Router();

router.get("/", async function (req, res) {
  res.json();
});
router.get("/login", async function (req, res) {});
router.get("/logout", async function (req, res) {});
router.get("/change-password", async function (req, res) {});
router.post("/change-password", async function (req, res) {});

module.exports = router;
