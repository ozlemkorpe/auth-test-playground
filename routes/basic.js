const express = require("express");
const basicAuth = require("basic-auth");

const router = express.Router();

router.get("/basic", (req, res) => {
  const user = basicAuth(req);

  if (!user || user.name !== "admin" || user.pass !== "1234") {
    res.set("WWW-Authenticate", 'Basic realm="Basic Auth"');
    return res.status(401).send("❌ Not authorized (BASIC)");
  }

  res.send("✅ Authorized via BASIC authentication");
});

module.exports = router;
