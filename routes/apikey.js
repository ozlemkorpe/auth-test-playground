const express = require("express");

const router = express.Router();

// Demo API key (hardcoded on purpose)
const API_KEY = "my-api-key-123";

/**
 * GET /apikey
 * Protected endpoint (x-api-key header required)
 */
router.get("/apikey", (req, res) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).send("❌ Missing API key");
  }

  if (apiKey !== API_KEY) {
    return res.status(401).send("❌ Invalid API key");
  }

  res.send("✅ Authorized via API KEY");
});

module.exports = router;
