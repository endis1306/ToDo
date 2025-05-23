require('dotenv').config();

const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
origin: process.env.CORS_ORIGIN_URL || "http://localhost:3001"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()
.then(() => {
console.log("Baza zsynchronizowana");
})
.catch((err) => {
console.log("Błąd synchronizacji bazy: " + err.message);
});

// simple route
app.get("/", (req, res) => {
res.json({ message: "To ja SERWER!!!." });
});

require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});