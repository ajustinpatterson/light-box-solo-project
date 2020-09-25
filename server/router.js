const router = require('express').Router();

const mediaUpload = require('./controllers/mediauploadctrl');
const userctrl = require('./controllers/usercntrl');

const uploadFile = require('./middlewares/upload');

router.get('/users', userctrl.getAllUsers);

// router.get('/create', () => {}); 3

router.get('/login', userctrl.login);

// router.get('/feed', () => {});

// router.get('/profile', () => {}); 2

// router.get('/explore', () => {});

router.post('/comment');

router.post('/like');

//implement later
//router.get('/collections', () => {});

router.post('/upload', uploadFile.single('file'), mediaUpload.uploadFiles);

module.exports = router;
