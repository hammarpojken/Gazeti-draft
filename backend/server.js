const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');


const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(fileUpload());


app.get('/', (req, res) =>{
		res.send('this is working');
})

app.post('/upload', (req,res) => {
	  if (!req.files)
    	return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.img;
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('./upload/filename.jpg', function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});


app.listen(3001, ()=> {
  console.log('app is running on port 3000');
})