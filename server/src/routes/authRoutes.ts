import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { RouteHandler } from "../routes/routeTypes"; // Type-only import
import { body, validationResult } from "express-validator";
import prisma from "../prismaClient";

const authRoutes = Router();
const saltRounds = 10; //salt rounds for bcrypt
const jwtsecret = "your_jwt_secret"; //replace with actual

// Registration route
const register: RouteHandler = async (req, res) => {
  try {
    // Validate request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, firstName, lastName, phoneNumber, address } =
      req.body;

    // Check if user already exists
    const existingUser = await prisma.customer.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = await prisma.customer.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber,
        address,
      },
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const login: RouteHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.customer.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const token = jwt.sign({ userId: user.id }, jwtsecret, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const userValidationRules = [
  body("email").isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

//const logout: RouteHandler = (req, res) => res.status(200).send("logout");

// Route definitions
authRoutes.route("/register").post(userValidationRules, register);

authRoutes.route("/login").post(userValidationRules, login);

//authRoutes.route("/logout").post(logout);

export { authRoutes };
