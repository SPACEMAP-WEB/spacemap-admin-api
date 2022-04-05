const router = require("express").Router();
const ResourceController = require("../controllers/resource");
const wrapper = require("../lib/request-handler");

router.post("/", wrapper(ResourceController.createModel));
router.get("/", wrapper(ResourceController.readModels));
router.get("/:id", wrapper(ResourceController.readModel));
router.put("/:id", wrapper(ResourceController.updateModel));
router.delete("/:id", wrapper(ResourceController.deleteModel));

module.exports = router;
