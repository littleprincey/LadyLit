const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const fs = require('fs')

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

server.get('/', (req, res) => {

  res.render('homePage')
})



server.get('/clitQuiz', (req, res) =>{

  fs.readFile('./data.json', 'utf-8', (err, data) => {
    data = JSON.parse(data)



    function showQuestion() {

      for(var i = 0; i < data.length; i++){
        return data.text[i]
      }

    }






  res.render('clitQuiz', showQuestion())
})
})





module.exports = server