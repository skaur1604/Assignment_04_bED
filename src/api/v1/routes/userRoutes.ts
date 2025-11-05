import express from 'express';
import { getUser, setCustomClaims } from '../controllers/userController';


const router = express.Router();

router.get('/:uid', getUser);
router.post('/set-role/:uid', setCustomClaims); 

export default router;
