const express = require('express');
const noteRoutes = require('./Routes/noteRoutes'); 

const app = express();

app.use('/api/notes', noteRoutes);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
