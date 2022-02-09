const express = require('express');
const app = express();
const router = express.Router();
const PORT = 5000;

app.set('view engine', 'ejs');
app.use(router);

router.use('/', function (req, res, next) {
  console.log('App running');
  next();
});

router.get('/', function (req, res) {
  res.render('index', {
    title: 'EJS',
    message: 'Hello there EJS!',
  });
});

app.listen(PORT, function () {
  console.log(`Running on ${PORT}`);
});
