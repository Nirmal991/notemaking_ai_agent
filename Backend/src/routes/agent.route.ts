import express from 'express';
import { validateData } from '../middlewares/validate.middleware.js';
import { sendMessageSchema } from '../validations/message.schema.js';
import { verifyJwt } from '../middlewares/auth.middleware.js';
import { agentChat } from '../controllers/agent.controller.js';


const router = express.Router();

router.route('/chat').post(validateData(sendMessageSchema), verifyJwt, agentChat)

export default router;