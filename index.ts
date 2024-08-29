import express from 'express'
import "dotenv/config"
import router from './Routes/userRoute'

const app = express()
const port = process.env.PORT

app.use(router)

app.listen(port, () => {
    console.log(`Server is running on PORT:${port}`)
})