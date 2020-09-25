const router = require('express').Router();

const mediaUpload = require('./controllers/mediauploadctrl');
const userctrl = require('./controllers/usercntrl');

const uploadFile = require('./middlewares/upload');

router.get('/users', userctrl.getAllUsers);

router.get('/create', userctrl.register);

router.post('/login', userctrl.login);

// router.get('/feed', () => {}); 5

// router.get('/profile', () => {}); 4

// router.get('/explore', () => {}); 8

// router.post('/comment'); 7

// router.post('/like'); 6

//implement later
//router.get('/collections', () => {});

router.post('/upload', uploadFile.single('file'), mediaUpload.uploadFiles);

module.exports = router;
