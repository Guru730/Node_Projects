const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);




class Database {
     
    constructor() {
        this.connect();
    }


    connect() {
        mongoose.connect("mongodb+srv://admin:1w3r5y7i9@twitterclone.mjlrf.mongodb.net/twitterClone?retryWrites=true&w=majority")
        .then(() => {console.log("Database Connection SuccessFull")})
        .catch((err) => console.log("Database Connection failed" + err))
    }
}


module.exports = new Database();


