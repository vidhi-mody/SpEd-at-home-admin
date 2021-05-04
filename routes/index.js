const express = require('express');
const User = require('../models/user');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const users = await User.find({ completed: true });

  res.render('index', { title: 'Responses', users });
});

router.get('/:userId', async (req, res, next) => {
  const user = await User.findOne({ userId: req.params.userId }).lean();

  res.render('user', { title: 'Student Report', user });
});

module.exports = router;
