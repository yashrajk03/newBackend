const express = require('express');
const port = 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World'); 
});
app.get('/login',(req,res)=>{
    res.send("logged in sucessfully ")
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`); 
});
