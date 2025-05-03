const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const { SignupUser, loginUser, ContactUser } = require("./userController");

// 👇 Login Route
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("password is required"),
  ],
  loginUser
);

router.post(
  "/Signup",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
    body("cpassword").notEmpty().withMessage("cpassword is required"),
    body("fname").notEmpty().withMessage("firstname is required"),

    body("lname").notEmpty().withMessage("lastname is required"),

    body("number").notEmpty().withMessage("number is required"),

    body("address").notEmpty().withMessage("address is required"),
  ],
  SignupUser
);

router.post(
  "/contact",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("fname").notEmpty().withMessage("firstname is required"),

    body("lname").notEmpty().withMessage("lastname is required"),

    body("queries").notEmpty().withMessage("queires is required"),

    body("address").notEmpty().withMessage("address is required"),
  ],
  ContactUser
);
module.exports = router;
