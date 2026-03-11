import express from 'express';
import { verifyJwt } from '../middlewares/auth.middleware.js';
import { getAllNotes } from '../controllers/note.controller.js';

const router = express.Router();

router.route('/all-notes').get(verifyJwt, getAllNotes);

export default router;