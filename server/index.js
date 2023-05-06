const express = require("express");
const app = express();
const cors = require('cors');
const artistRoutes = require("./routes/artistRoutes.js")
const PORT = 8000

app.use(express.json());
app.use('/creative', artistRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});