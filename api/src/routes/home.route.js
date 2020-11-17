import { Router } from 'express'

const homeRouter = Router();

homeRouter.get('/', (req, res) => {
    res.send('welcome to the api')
})

export default homeRouter