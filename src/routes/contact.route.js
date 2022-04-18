const router = require('express').Router();
const ContactController = require('../controllers/contact.controller');
const { verifyToken } = require('../lib/auth-middleware');
const wrapper = require('../lib/request-handler');

router.post('/', verifyToken, wrapper(ContactController.createModel));
router.get('/', verifyToken, wrapper(ContactController.readModels));
router.get('/:id', verifyToken, wrapper(ContactController.readModel));
router.delete('/:id', verifyToken, wrapper(ContactController.deleteModelByID));

module.exports = router;
