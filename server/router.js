const router = require('express').Router();

const mediactrl = require('./controllers/mediacntrl');
const uploadFile = require('./middlewares/upload');
const upload = require('./middlewares/upload');

router.get('/', () => {});

router.post('/upload', upload.single('file'), mediactrl.uploadFiles);

module.exports = router;
