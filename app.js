require('dotenv').config()

const express = require('express') // commonJS module
// import express from "express" // ES module
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/devin', (req, res) => {
    res.send('Finally I made up a server')
    // we can send many more things
})

app.get('/youtube', (req, res) => {
    res.send("<h1>Wow i am getting response from server</h1>")
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})


// now we can deploy this application on production eg. aws, azure, digitalocean, heroku, railway.app, seenode, render, cyclic.sh, etc