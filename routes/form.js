const express = require("express");

const router = express.Router();

/**
 * GET /form
 * Protected endpoint (session required)
 */
router.get("/form", (req, res) => {
  if (req.session?.user) {
    return res.send("✅ Authorized via FORM authentication");
  }

  res.status(401).send("❌ Not authorized (FORM)");
});

/**
 * POST /form/login
 * Creates session
 */
router.post("/form/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    req.session.user = {
      username,
      authType: "FORM",
    };

    return res.send("Logged in via FORM auth");
  }

  res.status(401).send("Invalid credentials");
});

/**
 * POST /form/logout
 * Destroys session
 */
router.post("/form/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("Logged out from FORM auth");
  });
});

module.exports = router;
