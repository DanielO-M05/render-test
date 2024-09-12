const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// For any route not found in the API, send back the React index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const cors = require("cors");


// const corsOptions = {
//     origin: ["http://localhost:5173"],
// };

// app.use(cors(corsOptions));

// app.get("/api", (req, res) => {
//     res.json({ fruits: ["apple", "orange", "banana"] })
// });

// app.listen(8080, () => {
//     console.log("Server started on port 8080");
// })