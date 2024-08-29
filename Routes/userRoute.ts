import { Router } from 'express'
import { createUser, getUser, getAllUser, updateUser, removeUser } from '../Controllers/userController'
import { upload } from '../Middlewares/upload'

const router = Router()

router.get('/users', getAllUser)
router.get('/user/:id', getUser)
router.post('/user', upload.single('image'), createUser )
router.put('/user/:id', upload.single('image'), updateUser)
router.delete('/user/:id', removeUser)

module.exports = router