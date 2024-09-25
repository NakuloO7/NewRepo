const express = require('express');
const app = express();

app.use(express.json());

app.post('/health-check', (req, res)=>{
  //array of kidneys is given by user kidney =[1,2]
  const kidneys = req.body.kidneys;
  const Klength = kidneys.length;

  res.send("Your kidney length is: "+ Klength);
})

//global catch
//these are called error handling middlewares
app.use(function(err, req, res, next){
    res.json({
      msg :"Sorry! something went wrong with our server"
    });
})

//if any validation is wrong it will catch is and send the given response
  

app.listen(3000);

//evertime it is not possible that the user will always send the right data/input
//for eg. json with kidneys array in this case
//that is why we need authentication so that our server does not crash by receiving wrong inputs