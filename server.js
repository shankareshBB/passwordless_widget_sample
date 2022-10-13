const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(8087, () => {
  console.log('passwordless Widget sample running on Port ' + 8087);
});