const { validationResult } = require("express-validator");
const { LoginUser, SignupUser } = require("./models/user"); // adjust path if needed
const bcrypt = require("bcrypt");

exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  console.log(email, password, "pass");

  try {
    const user = await SignupUser.findOne({ email }); // ✅ use findOne
    if (!user) return res.status(401).json({ message: "Email not found" });

    const isMatch = await bcrypt.compare(password, user.password); // ✅ this now works
    if (!isMatch){
      return res.status(402).json({ message: "Invalid credentials" });

    }

    res.status(200).json({
      message: "Login successful",
      user: { email: user.email, id: user._id },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Signup user

exports.SignupUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fname, lname, email, number, address, password, cpassword } =
    req.body;
  console.log(email, password, "pass", req.body);

  try {
    const existingUser = await SignupUser.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    if (password !== cpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new SignupUser({
      fname,
      lname,
      email,
      number,
      address,
      password: hashedPassword,
      cpassword: hashedPassword,
    });

    await newUser.save();

    res.status(200).json({
      message: "Signup successful",
      user: { id: newUser._id, email: newUser.email },
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
