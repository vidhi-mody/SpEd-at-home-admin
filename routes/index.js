const express = require('express');
const User = require('../models/user');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const users = await User.find({ completed: true });

  res.render('index', { title: 'Questionnaire', users });
});

router.get('/:userId', async (req, res, next) => {
  const user = await User.findOne({ userId: req.params.userId });

  res.render('user', { title: 'Questionnaire', user });
});

module.exports = router;
