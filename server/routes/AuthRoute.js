const { Signup, Login } = require("../controllers/authController");
const { UserVerification } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", UserVerification);

module.exports = router;
