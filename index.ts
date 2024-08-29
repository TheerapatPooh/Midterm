import express from 'express'
import "dotenv/config"
import { readdirSync } from 'fs'

const app = express()
const port = process.env.PORT

readdirSync('./Routes').map((r:string) => 
    app.use('/',require('./Routes/'+ r))
)

app.listen(port, () => {
    console.log(`Server is running on PORT:${port}`)
})