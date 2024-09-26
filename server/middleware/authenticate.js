import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';
import dotenv from 'dotenv';
dotenv.config();

const keysecret = process.env.KEY;
console.log(keysecret);
const authenicate = async (req, res, next) => {
    try {
        const token = req.cookies.eccomerce;
        
        if (!token) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized: No token provided",
            });
        }

        const verifyToken = jwt.verify(token, keysecret);
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!rootUser) {
            throw new Error("User Not Found");
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(401).json({
            status: "error",
            message: "Unauthorized: No token provided",
        });
    }
};

export default authenicate;
