import { Router } from 'express'
import authController from '../controllers/auth.controller'
import catchAsync from '../middleware/catchAsync'
const authRouter = Router()

const { login, signup } = authController

authRouter.get('/', async (req, res) => {
    res.send('welcome to the auth router')
})

authRouter.post('/login', catchAsync(login))
authRouter.post('/signup', catchAsync(signup))


export default authRouter