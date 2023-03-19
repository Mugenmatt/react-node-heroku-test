const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')))

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log("El server arrancó en el puerto 5000 rey");
});