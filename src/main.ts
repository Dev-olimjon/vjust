import express from "express";
import cors from "cors"
import routes from "./router/vjust.routes";
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)
app.listen(9090 || process.env.PORT, ()=>{
    console.log('server has been started...')
})