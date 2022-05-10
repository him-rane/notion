const router = require("express").Router();
const User = require("../Models/User");

const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(9);

    const hashedPass = await bcrypt.hashSync(
      req.body.password.toString(),
      salt
    );
    console.log(hashPassword);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (user) {
      const validated = await bcrypt.compare(
        req.body.password.toString(),
        user.password
      );
      if (validated) {
        const { password, ...others } = user._doc;
        res.status(400).json(others);
      } else res.status(400).json("Wrong crendentials!");
    } else res.status(400).json("Wrong crendentials!");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
