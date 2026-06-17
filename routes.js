const express = require('express');
const router = express.Router();
const summaryController = require('./src/controller/summarycontroller');
const historyController = require('./src/controller/historycontroller');
router.get('/summary', summaryController.getDashboardSummary);
router.get('/history', historyController.getUserHistory);
module.exports = router;