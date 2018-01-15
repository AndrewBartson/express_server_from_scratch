let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;
app.disable('x-powered-by');
let morgan = require('morgan');
let bodyParser = require('body-parser');
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/weather', (req, res, next) => {
  res.json({message: "rain"});
});

app.use((err, req, res, next) => {
  let status = err.status || 500;
  res.status(status).json({error: err});
})

app.use((req,res, next) => {
  res.status(404).json({error: {message: "Not found"}})
});

let listener = () => console.log(`Listening on port ${PORT}`);
app.listen(PORT, listener);
