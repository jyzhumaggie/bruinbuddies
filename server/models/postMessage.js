import mongoose from 'mongoose';

// Schema? with mangoDB can create 
// a lot of diff types of data struct
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creater: String,
    name: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// creating a model to unify all postMessage formats/contents
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;