const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user.controllers");
const authMiddleware = require("../middlewares/auth.middleware");
const { check } = require("express-validator");

router.post(
  "/register",
  [
    check("fullname.firstname").notEmpty().withMessage("Firstname is required"),
    check("fullname.lastname").notEmpty().withMessage("Lastname is required"),
    check("email").isEmail().withMessage("Valid email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userControllers.registerUser
);

router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Valid email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userControllers.loginUser
);

router.get("/profile", authMiddleware.authUser, userControllers.getUserProfile);

router.get('/logout', authMiddleware.authUser, userControllers.logoutUser)

module.exports = router;
