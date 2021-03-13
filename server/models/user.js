import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true},
    id: { type: String },
    selectedFile: { type: String, required: false, default: ''},
    bio: { type: String, required: false, default: '' },
    major: { type: String, required: false, default: '' },
    year: { type: String, required: false, default: '' },
    hobbies: { type: String, required: false, default: '' },
    catDog: { type: String, required: false, default: 'cat' },
    nightOrMorning: { type: String, required: false, default: 'night' },
    groupSize: { type: String, required: false, default: 'small'},
    friends: {
        type: [String],
        default: [],
    },
});

export default mongoose.model('User', userSchema);