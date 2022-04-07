const router = require("express").Router();
const ResourceFileController = require("../controllers/resourceFile.controller");
const wrapper = require("../lib/request-handler");

router.post("/", wrapper(ResourceFileController.createModel));
router.get("/", wrapper(ResourceFileController.readModels));
router.get("/:id", wrapper(ResourceFileController.readModel));
router.put("/:id", wrapper(ResourceFileController.updateModel));
router.delete("/:id", wrapper(ResourceFileController.deleteModel));

module.exports = router;
