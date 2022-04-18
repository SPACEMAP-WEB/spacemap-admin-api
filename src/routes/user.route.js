const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const { verifyToken } = require('../lib/auth-middleware');
const wrapper = require('../lib/request-handler');

router.post('/', verifyToken, wrapper(UserController.createModel));
router.get('/', verifyToken, wrapper(UserController.readModels));
router.get('/:id', verifyToken, wrapper(UserController.readModel));
router.put('/:id', verifyToken, wrapper(UserController.updateModelByID));
router.delete('/:id', verifyToken, wrapper(UserController.deleteModelByID));

module.exports = router;
