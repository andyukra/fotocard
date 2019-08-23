const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/fotoSocial", {
    useNewUrlParser : true
}) .then(() => console.log("db is connectd")) .catch(err => console.log(err));


