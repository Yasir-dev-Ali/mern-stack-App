import express from 'express';
import { userApi } from '../controler/user.controler.js';
const router=express.Router();

router.get('/', userApi);
export default router;