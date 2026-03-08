import express from 'express';
import { registerUser } from '../controllers/user.controller.js';
import { validateData } from '../middlewares/validate.middleware.js';
import { registerUserSchema } from '../validations/auth.schema.js';

const router = express.Router();

router.route('/register').post(validateData(registerUserSchema),registerUser)

export default router;