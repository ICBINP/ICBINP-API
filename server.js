const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(cors())
const usersController = require('./controllers/usersController')
const charactersController = require('./controllers/characterController')
const logger = require('morgan')
app.use(logger('dev'));


// Put a PORT variable here and set it to process.env.PORT OR 3000

//const cookbookRouter = require('./controllers/cookbookRoutes')
//const authorRouter = require('./controllers/authorRoutes')

app.use(express.json())
app.use('/users', usersController)
app.use('/characters', charactersController)


const PORT = process.env.PORT
// const PORT = process.env.PORT ? process.env.PORT : 4000

// Update this to the PORT variable
app.listen(PORT, () => console.log('Server running on port ' + PORT))

/*app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟 🌟 🌟`);
  });*/