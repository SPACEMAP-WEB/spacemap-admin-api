const router = require('express').Router();
const ResourceFileController = require('../controllers/resourceFile.controller');
const wrapper = require('../lib/request-handler');
const { upload } = require('../lib/S3Client');

router.post(
  '/',
  upload.single('file'),
  wrapper(ResourceFileController.createModel)
);

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
router.delete(
  '/file-name/:fileName',
  wrapper(ResourceFileController.deleteModelByFileName)
);
router.delete('/:id', wrapper(ResourceFileController.deleteModelByID));

module.exports = router;
