const router = require("express").Router();
const ResourceFileController = require("../controllers/resourceFile");

router.post("/", ResourceFileController.createModel);
router.get("/", ResourceFileController.readModels);
router.get("/:id", ResourceFileController.readModel);
router.put("/:id", ResourceFileController.updateModel);
router.delete("/:id", ResourceFileController.deleteModel);

module.exports = router;
