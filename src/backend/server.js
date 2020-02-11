const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const businessRouter = require('./routes/business');
const charityRouter = require('./routes/charity');

app.use('/business', businessRouter);
app.use('/charity', charityRouter);

const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });
