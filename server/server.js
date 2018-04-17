const express = require('express');

const app = express();


app.get('/#/', function(res,req){
		res.status(404)
});





app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})