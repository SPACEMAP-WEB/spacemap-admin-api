const router = require("express").Router();
const TemplateController = require("../controllers/template");

router.post("/", TemplateController.createModel);
router.get("/", TemplateController.readModels);
router.get("/:id", TemplateController.readModel);
router.put("/:id", TemplateController.updateModel);
router.delete("/:id", TemplateController.deleteModel);

module.exports = router;
