const {
    Router
} = require('express');
const router = Router();

const {
    renderIndex,
    renderAbout,
    renderFormat
} = require('../controllers/index.controler');

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/format', renderFormat);

module.exports = router;