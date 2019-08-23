const { Router } = require('express');
const router = Router();
const modelo = require('../models/schema');
const coment = require('../models/coments');



router.get('/', (req, res) => {
    res.render('index');
});

router.get('/imgShow/:id', async (req, res) => {
    var image = await modelo.findOne({ filename : req.params.id });
    var comment = await coment.find({ id : req.params.id }).sort({_id:-1});
    if(image) {
        res.render('images', { image, comment })
    } else {
        res.send('la imagen no existe');
    }
}); 

router.post('/imgUp', async (req, res) => {
    var image = new modelo({
        filename : req.file.filename,
        titulo : req.body.titulo,
        descripcion : req.body.descripcion
    });
    await image.save();
    res.redirect(`/imgShow/${req.file.filename}`);
});

router.post('/comment/:id', async (req, res) => {
    var comentario = new coment({
        id : req.params.id,
        name : req.body.nombre,
        coment : req.body.comentario
    });
    await comentario.save();
    res.redirect(`/imgShow/${req.params.id}`);
});


router.get('*', (req, res) => {
    res.send('error 404');
})

module.exports = router;