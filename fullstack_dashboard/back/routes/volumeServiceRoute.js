const router = require('express').Router();
const volumeServiceController = require('../controllers/volumeServiceController');

router.get('/volume_services', volumeServiceController.getVolumeService);
module.exports = router;
