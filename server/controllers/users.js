import bcrypt from 'bcryptjs'; //hash
import jwt from 'jsonwebtoken'; //store the user in a browser on a website
import mongoose from 'mongoose';
import User from '../models/user.js';


export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist."});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials."});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h"});
        res.status(200).json({ result: existingUser, token });

    } catch (error) {
        res.status(500).json({ message: "Something is wrong" });
    }
};



export const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    try {        
        console.log("here");

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already registered"});

        if (password !== confirmPassword) return res.status.json({ message: "Passwords don't match."});

        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
        const token = jwt.sign({ email: result.email, id: result._id, }, 'test', { expiresIn: "1h"});
        await result.save();                                              // secret string
        res.status(200).json({ result, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" });
    }
};


export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    const { id: _id } = req.params;
    const user = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with current ID`);

    const updatedUser = await User.findByIdAndUpdate(_id, { ...user, _id}, { new: true });
    res.json(updatedUser);
}