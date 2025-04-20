const mongoose = require("mongoose");

// Login Schema
const loginUserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Signup Schema
const signupUserSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      trim: true,
    },
    lname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    number: {
      type: Number, // ⚠️ Corrected from lowercase "number"
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    cpassword: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// ✅ Model definitions
const LoginUser = mongoose.model("LoginUser", loginUserSchema);
const SignupUser = mongoose.model("SignupUser", signupUserSchema);

// ✅ Export models
module.exports = {
  LoginUser,
  SignupUser,
};
