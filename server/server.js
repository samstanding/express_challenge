//require express 
let express = require('express');

//create an instance of express by calling the function required above
let app = express();
let port = 6242;

//express static file serving- let express know that public is where the files are
app.use(express.static('server/public'));

//set up the server
app.listen(port,function (){
    console.log(`listening on port ${port}`);
})