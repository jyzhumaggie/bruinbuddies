// Controller folder
// Separate routes requests and logics
import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';
const router = express.Router();

export const getPost = async(req, res) => {
    try { // finding all data that uses the PostMessage model, takes time --> async
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages); // 200 everything went aight
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async(req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}


export const updatePost = async(req, res) => {
    const { id: _id } = req.params;
    // const { title, message, creater, selectedFile, tags } = req.body;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with current ID`);

    // const updatedPost = { creater, title, message, tags, selectedFile, _id: id };
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
    // await PostMessage.findOneAndUpdate(id, updatePost, { new: true });
    // res.json({ updatedPost });
    res.json(updatedPost);
}


export const deletePost = async(req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with current ID`);

    await PostMessage.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully."});

}


export const likePost = async (req, res) => {
    const { id } = req.params;

    // if (!req.userId) return res.json({ message: `Unauthenticated`});
    console.log("in controller");


    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with current ID`);

    const post = await PostMessage.findById(id);
    // const index = post.likes.findIndex((id) => id === String(req.userId));
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: (post.likeCount + 1) }, { new: true });

    // if (index === -1 ) {
    //     // like the post
    //     post.likes.push(req.userId);
    // } else {
    //     //dislike

    // }

    res.json(updatedPost);


}


export default router;