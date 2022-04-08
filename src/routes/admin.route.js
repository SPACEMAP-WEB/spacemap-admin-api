const router = require('express').Router()
const { adminLoginControl, adminLogoutControl, changePasswordControl  } = require('../controllers/admin.controller')
const { verifyToken, issueAccessToken } = require('../lib/auth-middleware')
const wrapper = require('../lib/request-handler')

router.get('/', async function (_req, res) {
  res.json({
  })
})

router.post('/login', wrapper(adminLoginControl))
router.post('/logout', verifyToken, wrapper(adminLogoutControl))
router.put('/password', verifyToken, wrapper(changePasswordControl))
router.get('/accesstoken', wrapper(issueAccessToken))

module.exports = router
