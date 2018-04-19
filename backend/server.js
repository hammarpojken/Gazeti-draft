const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path')


const app = express();
app.use('/images', express.static(path.join(__dirname, 'uploads')))
app.use(cors())
app.use(bodyParser.json());
app.use(fileUpload());


app.get('/', (req, res) =>{
		res.send('this is working');
})

app.post('/upload', (req,res) => {
	  if (!req.files)
    	return res.status(400).send('No files were uploaded.' + req.files.img);
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.img;
  let fileIdtemp = req.body.id;
  
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('./uploads/' + fileIdtemp, function(err) {
    if (err)
      return res.status(500).send(err); 
 
    res.status(200).json('success');
  });
});

app.get('/imageGet/:id', (req, res) => {
  console.log(__dirname)
      res.sendFile('/package.json');
      

})


app.listen(3001, ()=> {
  console.log('app is running on port 3001');
})