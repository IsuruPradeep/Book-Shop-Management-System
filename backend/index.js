const express = require('express');
const app = express()
const mongoose = require('mongoose');


const port = process.env.PORT || 5000;

// routes


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
    app.use('/', (req, res) => {
    res.send("Book store Server is running!");
})
}

main().then(() => console.log("Mongodb Connected Successfully!")).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



