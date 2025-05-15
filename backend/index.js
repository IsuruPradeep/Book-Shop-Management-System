const express = require('express');
const app = express()
const mongoose = require('mongoose');


const port = process.env.PORT || 5000;
require('dotenv').config()


// A4fuFn6MxGEx3ULe


async function main() {
  await mongoose.connect(process.env.DB_URL);
    app.use('/', (req, res) => {
    res.send("Book store Server is running!");
})
}

main().then(() => console.log("Mongodb Connected Successfully!")).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



