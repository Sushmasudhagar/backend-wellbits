const express = require('express');
const router = express.Router();
const authMiddleware = require('./middleware/authmiddleware');
const summaryController = require('./src/controller/summarycontroller');
const historyController = require('./src/controller/historycontroller');
router.get('/summary', authMiddleware, summaryController.getDashboardSummary);
router.get('/history', authMiddleware, historyController.getUserHistory);
module.exports = router;