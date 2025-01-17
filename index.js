const http = require("http"),
      logger = require("morgan"),
      express = require("express"),
      bodyParser =require("body-parser"),
      mongoose =  require("mongoose");
      dotenv =require("dotenv");

let app = express();
let port = process.env.PORT || 8000;

dotenv.config();

app.use(bodyParser.json());
app.use(logger("tiny"));
app.use(require('./routes'));

//const dbURI = "mongodb://localhost/test";

mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));

app.listen(port, function(err){
    console.log("Listening on port: " +port)
});