const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Import Routes
const routerV1 = require("./src/Routes/RouterV1");

// =========================================================
// Routing
// =========================================================

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", routerV1);

// =========================================================
// End Routing
// =========================================================
