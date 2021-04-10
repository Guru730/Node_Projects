const express = require('express');

const app = express();

const port = 3006;

const middleware = require('./middleware');

const server = app.listen(port, () => console.log('server listening on port ' + port));

app.set("view engine", "pug");
app.set("views", "views");


app.get("/",middleware.requireLogin, (req, res, next) => {

        var payload = {
            pageTitle: "home"
        };
        
     res.status(200).render("home", payload);
});



