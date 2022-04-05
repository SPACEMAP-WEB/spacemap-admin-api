const router = require("express").Router();
const ContactController = require("../controllers/contact");

router.post("/", ContactController.createModel);
router.get("/", ContactController.readModels);
router.get("/:id", ContactController.readModel);
router.put("/:id", ContactController.updateModel);
router.delete("/:id", ContactController.deleteModel);

module.exports = router;
