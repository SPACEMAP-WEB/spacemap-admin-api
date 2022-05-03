const router = require('express').Router();
const ResourceFileController = require('../controllers/resourceFile.controller');
const { verifyToken } = require('../lib/auth-middleware');
const wrapper = require('../lib/request-handler');
const { upload } = require('../lib/S3Client');

router.post(
  '/',
  verifyToken,
  upload.single('file'),
  wrapper(ResourceFileController.createModel)
);

router.get('/:id', verifyToken, wrapper(ResourceFileController.readModelByID));

router.put(
  '/:id',
  verifyToken,
  wrapper(ResourceFileController.updateModelByID)
);

router.get(
  '/places/:placesID',
  wrapper(ResourceFileController.readModelByPlacesID)
);
router.delete(
  '/places/:placesID',
  verifyToken,
  wrapper(ResourceFileController.deleteModelByPlacesID)
);
router.delete(
  '/file-name/:fileName',
  wrapper(ResourceFileController.deleteModelByFileName)
);
router.delete(
  '/:id',
  verifyToken,
  wrapper(ResourceFileController.deleteModelByID)
);

module.exports = router;
