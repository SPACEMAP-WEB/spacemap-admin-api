const router = require('express').Router();
const ResourceController = require('../controllers/resource.controller');
const { verifyToken } = require('../lib/auth-middleware');
const wrapper = require('../lib/request-handler');
const { upload } = require('../lib/S3Client');

router.post(
  '/',
  upload.fields([{ name: 'images' }, { name: 'files' }]),
  wrapper(ResourceController.createModel)
);
router.get('/', wrapper(ResourceController.readModels));
router.get('/:id', wrapper(ResourceController.readModelByID));
router.get('/board/:type', wrapper(ResourceController.readModelByBoard));
router.put('/:id', verifyToken, wrapper(ResourceController.updateModelByID));
router.delete('/:id', wrapper(ResourceController.deleteModelByID));

module.exports = router;
