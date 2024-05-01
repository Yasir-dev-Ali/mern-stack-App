import  express from "express"
const router= express.Router();
import { sginUp,sginIn } from "../controler/auth.controler.js";

router.post("/signup", sginUp);
router.post("/sginIn",sginIn)



export default router;