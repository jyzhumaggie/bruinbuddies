import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true},
    id: { type: String },
    
    bio: { type: String, required: true },

    major: { type: String, required: true },
    year: { type: String, required: true },
    hobbies: { type: String, required: true },
    catDog: { type: String, required: true },
    nightOrMorning: { type: String, required: true },
    groupSize: { type: String, required: true },
});

export default mongoose.model('User', userSchema);