const router = require("express").Router();
const ContactController = require("../controllers/contact");
const wrapper = require("../lib/request-handler");

router.post("/", wrapper(ContactController.createModel));
router.get("/", wrapper(ContactController.readModels));
router.get("/:id", wrapper(ContactController.readModel));
router.put("/:id", wrapper(ContactController.updateModel));
router.delete("/:id", wrapper(ContactController.deleteModel));

module.exports = router;
