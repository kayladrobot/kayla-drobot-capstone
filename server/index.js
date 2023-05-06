const express = require("express");
const app = express();
const cors = require('cors');
const creativeRoutes = require("./routes/creativeRoutes.js")
const jobRoutes = require("./routes/creativeRoutes.js")
const PORT = 8000

app.use(express.json());
app.use('/creative', creativeRoutes);
app.use('/jobs', jobRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});