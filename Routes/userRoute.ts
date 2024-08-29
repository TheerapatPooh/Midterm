import { Router } from 'express'
import { getAllUser } from '../Controllers/userController'

const router = Router()

router.get('/users', getAllUser)

export default router