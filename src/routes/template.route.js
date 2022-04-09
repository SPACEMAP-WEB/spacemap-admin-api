const router = require('express').Router();
const TemplateController = require('../controllers/template.controller');
const wrapper = require('../lib/request-handler');

router.post('/', wrapper(TemplateController.createModel));
router.get('/', wrapper(TemplateController.readModels));
router.get('/:id', wrapper(TemplateController.readModel));
router.put('/:id', wrapper(TemplateController.updateModelByID));
router.delete('/:id', wrapper(TemplateController.deleteModelByID));

module.exports = router;
