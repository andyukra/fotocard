const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://andyukra:4343@cluster0-eahfi.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser : true
}) .then(() => console.log("db is connectd")) .catch(err => console.log(err));


