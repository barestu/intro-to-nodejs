const express = require('express');
const app = express();
const router = express.Router();
const PORT = 5000;

app.set('view engine', 'pug');
app.use(router);

router.use('/', function (req, res, next) {
  console.log('App running');
  next();
});

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Hey',
    message: 'Hello there!',
  });
});

app.listen(PORT, function () {
  console.log(`Running on ${PORT}`);
});
