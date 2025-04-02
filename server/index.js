const express = require('express');
const app = express();

//Middleware
const logRoutes = (req, res, next) => {
    const timeOfRequest = new Date().toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${timeOfRequest}`)
    next();
};

app.use(logRoutes)

const serverJoke = (req, res, next) => {

    res.send({setup: "Have you heard the joke about yoga?", punchline: "Nevermind its a bit of a stretch.."});
};

const serverPicture = (req, res, next) => {

    res.send("<div style='display: flex; justify-content: center; align-items: center;'><img src= 'https://media1.tenor.com/m/CarV7GDhiwQAAAAd/yippee-cat.gif'></div>")
}
const serverDie = (req, res, next) => {
   // for (let)
    let array = []
      const roll = Math.floor(Math.random() * 6);
      array.push(roll)
    res.json({array})
}

app.get('/api/joke', serverJoke);
app.get('/api/picture', serverPicture)
app.get('/api/rollDie', serverDie)

const port = 8080;

app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`)
});