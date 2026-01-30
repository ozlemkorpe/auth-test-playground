const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const JWT_SECRET = "jwt-secret";

/**
 * POST /bearer/login
 * Returns JWT
 */
router.post("/bearer/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    const token = jwt.sign(
      {
        username,
        authType: "BEARER",
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }

  res.status(401).send("Invalid credentials");
});

/**
 * GET /bearer
 * Protected endpoint (JWT required)
 */
router.get("/bearer", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("❌ No Bearer token");
  }

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, JWT_SECRET);
    res.send("✅ Authorized via BEARER (JWT)");
  } catch (err) {
    res.status(401).send("❌ Invalid or expired token");
  }
});

module.exports = router;
