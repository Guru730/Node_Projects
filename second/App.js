const express = require('express');
const app = express();
const port = 3003;
const middleware = require('./middleware')
const path = require('path')
const bodyParser = require("body-parser");

const database = require('./database');

const server = app.listen(port, () => console.log("Server listening on port " + port));

app.set("view engine", "pug");
app.set("views", "views");


//not that much importent
app.use(bodyParser.urlencoded({extended: false}));



app.use(express.static(path.join(__dirname, "public")));

// Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');


app.use("/login", loginRoute);
app.use("/register", registerRoute);


app.get("/", middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: "Home"
    }

    res.status(200).render("home", payload);
})