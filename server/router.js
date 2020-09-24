const router = require('express').Router();

const mediaUpload = require('./controllers/mediaupload');
const uploadFile = require('./middlewares/upload');

router.get('/', () => {});

router.post('/upload', uploadFile.single('file'), mediaUpload.uploadFiles);

module.exports = router;
