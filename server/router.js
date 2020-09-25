const router = require('express').Router();

const mediaUpload = require('./controllers/mediauploadctrl');
const userctrl = require('./controllers/usercntrl');
const uploadFile = require('./middlewares/upload');

router.get('/', () => {});

router.get('/users', userctrl.getAllUsers);

router.post('/upload', uploadFile.single('file'), mediaUpload.uploadFiles);

module.exports = router;
