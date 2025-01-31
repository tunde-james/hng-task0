import express from 'express';
import MyUserController from '../controllers/my-user-controller';

const router = express.Router();

router.get('/', MyUserController.getUser);

export default router;
