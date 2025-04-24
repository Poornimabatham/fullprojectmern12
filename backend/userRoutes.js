const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const { SignupUser, loginUser ,getFeaturesById,insertfeaturesSchema} = require("./userController");

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


router.get(
  "/getFeaturesById",
  [
    body("id").isEmail().withMessage("Valid id is required"),
   
  ],
  SignupUser
);


router.post(
  "/insertfeaturesSchema",
  [
    body("FeaturesId").isEmail().withMessage("Valid email is required"),
    body("title").notEmpty().withMessage("Password is required"),
    body("description").notEmpty().withMessage("cpassword is required"),
    body("image").notEmpty().withMessage("firstname is required"),

    body("price").notEmpty().withMessage("lastname is required"),
  ],
  insertfeaturesSchema
);

module.exports = router;
