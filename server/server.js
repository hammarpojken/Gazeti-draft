const express = require('express');

const app = express();


app.get('/', function(res,req){
		res.status(303).send('hej')
});





app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})