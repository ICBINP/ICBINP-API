const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(cors())

// Put a PORT variable here and set it to process.env.PORT OR 3000

//const cookbookRouter = require('./controllers/cookbookRoutes')
//const authorRouter = require('./controllers/authorRoutes')

app.use(express.json())
app.use('/users/', userRouter)

const PORT = process.env.PORT
// const PORT = process.env.PORT ? process.env.PORT : 4000

// Update this to the PORT variable
app.listen(PORT, () => console.log('Server running on port ' + PORT))

/*app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟 🌟 🌟`);
  });*/