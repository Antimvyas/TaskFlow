import { createUser, findUserByEmail } from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function registerUser(req, res) {
    try {
        const { name, email, password } = req.body;

        const exist = await findUserByEmail(email);
        if (exist) {
            return res.status(409).json({ mesage: "User already exists" })
        }
        const hashpassword = await bcrypt.hash(password, 10)
        const result = await createUser(name, email, hashpassword);
        return res.status(201).json({ result, mesage: "Successfully created" })
    } catch (error) {
        return res.status(400).json({ error })
    }
}

export async function loginUser(req, res) {
    try {
        const { email, password } = req.body
        const exits = await findUserByEmail(email);
        if (!exits) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const ispassword = bcrypt.compare(password, exits.password)
        if (!ispassword) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign({
            id: exits.id,
            email: exits.email
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )
        return res.status(200).json({
            message: "Login successful",
            token
        });
    } catch (error) {
        return res.status(400).json({ error })
    }
}