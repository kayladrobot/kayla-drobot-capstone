const express = require("express");
const app = express();
const cors = require('cors');
const creativeRoutes = require("./routes/creativeRoutes.js")
const jobRoutes = require("./routes/creativeRoutes.js")
const PORT = 8080

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.method} Request Received`);
    next();
  });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use('/creatives', creativeRoutes);
app.use('/jobs', jobRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
