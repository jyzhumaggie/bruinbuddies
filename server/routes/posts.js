import express from 'express';

import auth from '../middleware/auth.js';
import { getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';


const router = express.Router();

// localhost:5000/post
router.get('/', getPost);
router.post('/', createPost);

router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;