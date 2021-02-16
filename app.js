console.log('test')
const express = require('express')

const app = express()

//Routing
app.get('/', (_, res) =>
  res.json({ status: 'Successful', message: 'Express Server Stated' })
)

// Starting server
app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on http://localhost:${process.env.PORT || 3000}`)
)
