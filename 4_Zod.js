const express = require('express');
const zod = require('zod');
const app = express();

app.use(express.json());

// const schema = zod.array(zod.number()); 
//this will be the structure of your schema (array of numbers);

// {
//   email: string
//   password : atleast 8 letters
//   country: "IN", "US"
// }  write a validation for this


const schema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8),
    country : zod.literal("US").or(zod.literal("IN")),
    kidneys : zod.array(zod.number())
})  

app.post('/health-check',(req, res)=>{
    const obj = req.body.obj;

    const response = schema.safeParse(obj);
    //now just by adding this single line we can acheive input validation

    if(!response.success){
        res.json({
            msg : "Invalid Input"
        })
    }else{
        res.json({
            response
        })
    }
})


app.listen(3000);





//https://fakerapi.it/api/v1/persons