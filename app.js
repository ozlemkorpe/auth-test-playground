const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

/* -------------------------
   BASIC MIDDLEWARES
-------------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------------
   SESSION (FORM AUTH)
-------------------------- */
app.use(
  session({
    secret: "super-secret",
    resave: false,
    saveUninitialized: false,
  })
);

/* -------------------------
   UI (INDEX PAGE)
-------------------------- */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

/* -------------------------
   AUTH ROUTES
-------------------------- */
app.use("/", require("./routes/form"));
app.use("/", require("./routes/basic"));
app.use("/", require("./routes/bearer"));
app.use("/", require("./routes/apikey"));

/* -------------------------
   FALLBACK
-------------------------- */
app.use((req, res) => {
  res.status(404).send("❓ Route not found");
});

/* -------------------------
   SERVER
-------------------------- */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🔐 Auth Playground running on http://localhost:${PORT}`);
});
