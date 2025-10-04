const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const generateToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" }
    )
}

const signupUser = async (req, res) => {
    const {
        name,
        username,
        password,
        phone_number,
        gender,
        date_of_birth,
        membership_status
    } = req.body

    try {
        if (
            !name ||
            !username ||
            !password ||
            !phone_number ||
            !gender ||
            !date_of_birth ||
            !membership_status
        ) {
            res.status(400)
            throw new Error("please add all fields")
        }
        const userExists = await User.findOne({ username });
        if (userExists) {
            res.status(400)
            throw new Error("username already in use")
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            name,
            username,
            password: hashedPassword,
            gender,
            phone_number,
            date_of_birth,
            membership_status
        })
        if (user) {
            const token = generateToken(user._id)
            res.status(201).json({ username, token })
        } else {
            res.status(400)
            throw new Error("invalid user data")
        }
    } catch (error) {
        res.status(400).json({ error: error.message });

    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username })

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = generateToken(user._id)
            res.status(200).json({ username, token })
        } else {
            res.status(400);
            throw new Error("Invalid credentials");
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getMe = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    signupUser,
    loginUser,
    getMe,
};