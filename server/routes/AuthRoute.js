const { Signup } = require("../controllers/authController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
