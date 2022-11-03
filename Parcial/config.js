import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT
const STRCNX = process.env.STRCNX 
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA    // MEM - MONGO
const BASE = process.env.BASE 

export default {
    PORT,
    STRCNX,
    MODO_PERSISTENCIA,
    BASE
}