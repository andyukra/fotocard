const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');

var storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/images'),
    filename : (req, file, cb) => {
        var extname = path.extname(file.originalname);
        cb(null, Date.now() + extname);
    }
});

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./database');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(multer({
    storage,
    dest : path.join(__dirname, 'public/images'),
    fileFilter : (req, file, cb) => {
        var fileTypes = /jpeg|jpg|png|gif/;
        var mimetype = fileTypes.test(file.mimetype);
        var extname = fileTypes.test(path.extname(file.originalname));
        if(mimetype && extname) {
            cb(null, true);
        } else {
            cb('el Archivo Debe ser una imágen');
        }

    },
    limits : { fileSize : '15MB' }
}).single('imgUp'));

app.use(require('./routes/index'));




app.listen(app.get('port'), () => {
    console.log('Servidor Funcionando en el puerto : ', app.get('port'));
});