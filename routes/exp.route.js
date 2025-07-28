import expence from 'express'
const router = expence.Router()
import {home,
    addexp
} from '../controllers/exp.cont.js'

router.get("/",home)
router.post("/add",addexp)


export default router