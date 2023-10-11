const jwt = require("jsonwebtoken");
const crypto = require("crypto");

module.exports.createSecretToken = (id) => {
  // Generate a random token key
  const tokenKey = crypto.randomBytes(32).toString("hex");

  return jwt.sign({ id }, tokenKey, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
