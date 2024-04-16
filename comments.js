// Create web server
// Create a new web server using express
const express = require('express')
const app = express()

// Create a new web server using express
// Set the view engine to ejs
// Use the ejs view engine
app.set('view engine', 'ejs')

// Use the ejs view engine
// Use the ejs view engine
app.use(express.static('public'))

// Use the ejs view engine
// Use the ejs view engine
// Use the ejs view engine
app.get('/', (req, res) => {
  res.render('comments.ejs')
})

// Use the ejs view engine
// Use the ejs view engine
// Use the ejs view engine
// Use the ejs view engine
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

//