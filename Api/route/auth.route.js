import express from "express"
const router= express.Router();
import { sginUp } from "../controler/auth.controler.js";

router.post("/signup",sginUp );


export default router;