const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

//importing bcrypt to hash to the entered password

const bcrypt = require('bcrypt');

const User = require('../schemas/UserSchema')

app.set("view engine", "pug");
app.set("views", "views");


app.use(bodyParser.urlencoded({ extended: false }));


router.get("/", (req, res, next) => {
    
    if(req.session) {
           req.session.destroy(() => {
               res.redirect("/login");
           })
    }

})



module.exports = router;