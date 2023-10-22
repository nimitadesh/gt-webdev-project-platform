const { Signup, Login } = require("../controllers/AuthController");
const { UserVerification } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", UserVerification);

module.exports = router;
