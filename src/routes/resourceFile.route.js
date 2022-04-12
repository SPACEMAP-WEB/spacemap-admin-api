const router = require('express').Router();
const ResourceFileController = require('../controllers/resourceFile.controller');
const wrapper = require('../lib/request-handler');
const uploadS3 = require('../lib/uploadS3');

router.post(
  '/',
  uploadS3.single('resource-file'),
  wrapper(ResourceFileController.createModel)
);

router.get('/', wrapper(ResourceFileController.readModels));
router.get('/:id', wrapper(ResourceFileController.readModelByID));
router.put('/:id', wrapper(ResourceFileController.updateModelByID));
router.get(
  '/places/:placesID',
  wrapper(ResourceFileController.readModelByPlacesID)
);
router.delete(
  '/places/:placesID',
  wrapper(ResourceFileController.deleteModelByPlacesID)
);
router.delete('/:id', wrapper(ResourceFileController.deleteModelByID));

module.exports = router;
