import express, {Application} from 'express'
import {Request, Response,} from 'express'
import morgan from 'morgan'
const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Endpoint de prueba
app.get('/', (req: Request, res: Response) => {
    res.send('Hellooo Worlddd')
})

export default app