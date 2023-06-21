const express = require('express');


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('assets'));

app.listen(3333, () => {
  console.log(`App is running on port 3333`);
});