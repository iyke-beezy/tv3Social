import { Router } from 'express'
import { addData, getData } from '../controllers/users.controller'

const homeRouter = Router();

homeRouter.get('/', (req, res) => {
    res.send('welcome to the api')
})

homeRouter.post('/upload', async (req, res) => {
    await addData(req, res)
})

homeRouter.post('/api/getData', async (req, res) => {
    await getData(req, res)
})

export default homeRouter