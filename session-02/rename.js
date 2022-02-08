const fs = require('fs');

fs.rename('buatbaru.txt', 'rubahnama.txt', function (err) {
  if (err) throw err;
  console.log('Nama file telah dirubah');
});
