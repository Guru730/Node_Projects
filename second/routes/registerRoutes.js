const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", "views");


app.use(bodyParser.urlencoded({extended: false}));

router.get("/", (req, res, next) => {
    
    res.status(200).render("register");
})


router.post("/", (req, res, next) => {
     
    var User_name = req.body.name.trim();
    var User_lastname = req.body.lastname.trim();
    var User_username = req.body.username.trim();
    var User_email = req.body.email.trim();
    var User_password = req.body.Password;



   //So the user can see the values he last entered
    var payload = req.body;

    if(User_name && User_lastname && User_username && User_email && User_password) {
                 
    }
    else {
       payload.errorMessage = "Make sure each filed is filled with valid value";
       res.status(200).render("register", payload);
    }

    res.status(200).render("register");

})

module.exports = router;