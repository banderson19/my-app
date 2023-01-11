const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//helps with sending proper request
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencloded({ limit: "30mb", extended: true}));
app.use(cors());

// const CONNECTION_URL = ''
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(require('./routes'));

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(()=> app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`)))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/my-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
