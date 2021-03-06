import express from 'express';
import { getPost, createPost } from '../controllers/posts.js';


const router = express.Router();

// localhost:5000/post
router.get('/', getPost);
router.post('/', createPost);


export default router;