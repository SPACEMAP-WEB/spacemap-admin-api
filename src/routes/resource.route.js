const router = require('express').Router();
const ResourceController = require('../controllers/resource.controller');
const wrapper = require('../lib/request-handler');
const uploadS3 = require('../lib/uploadS3');

router.post(
  '/',
  uploadS3.fields([{ name: 'images' }, { name: 'files' }]),
  wrapper(ResourceController.createModel)
);
router.get('/', wrapper(ResourceController.readModels));
router.get('/:id', wrapper(ResourceController.readModel));
router.put('/:id', wrapper(ResourceController.updateModelByID));
router.delete('/:id', wrapper(ResourceController.deleteModelByID));

module.exports = router;
