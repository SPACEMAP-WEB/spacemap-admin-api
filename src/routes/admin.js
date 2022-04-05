const router = require('express').Router()
const { adminLoginControl, adminLogoutControl, changePasswordControl } = require('../controllers/admin')
const wrapper = require('../lib/request-handler')

router.get('/', async function (req, res) {
  res.json()
})

router.post('/login', wrapper(adminLoginControl))
router.post('/logout', wrapper(adminLogoutControl))
router.put('/password', wrapper(changePasswordControl))

module.exports = router
