import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true},
    id: { type: String },
    selectedFile: { type: String, required: false},

    bio: { type: String, required: false },

    major: { type: String, required: false },
    year: { type: String, required: false },
    hobbies: { type: String, required: false },
    catDog: { type: String, required: false },
    nightOrMorning: { type: String, required: false },
    groupSize: { type: String, required: false },
});

export default mongoose.model('User', userSchema);