const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, req.body.coffeeName + '.' + file.originalname.split('.')[1]);
    }
})

const upload = multer({ storage });

module.exports = {
    upload
}