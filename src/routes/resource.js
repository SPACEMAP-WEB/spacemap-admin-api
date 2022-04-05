const router = require("express").Router();
const ResourceController = require("../controllers/resource");

router.post("/", ResourceController.createModel);
router.get("/", ResourceController.readModels);
router.get("/:id", ResourceController.readModel);
router.put("/:id", ResourceController.updateModel);
router.delete("/:id", ResourceController.deleteModel);

module.exports = router;
