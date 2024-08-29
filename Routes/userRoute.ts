import { Router } from 'express'
import { createUser, getAllUser } from '../Controllers/userController'
import { upload } from '../Middlewares/upload'

const router = Router()


router.get('/users', getAllUser)
router.post('/user',upload.single('image') ,createUser )

module.exports = router