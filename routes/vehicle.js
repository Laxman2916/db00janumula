var express = require('express');
const vehicle_controlers= require('../controllers/vehicle');
var router = express.Router();

router.get('/', vehicle_controlers.vehicle_view_all_Page );
router.get('/detail', vehicle_controlers.vehicle_view_one_Page);
router.get('/create', vehicle_controlers.vehicle_create_Page);
router.get('/update', vehicle_controlers.vehicle_update_Page);
router.get('/delete', vehicle_controlers.vehicle_delete_Page); 
module.exports = router;
