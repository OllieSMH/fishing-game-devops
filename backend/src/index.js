const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Fishing game backend is up!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
