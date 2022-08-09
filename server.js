require('dotenv').config()
const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Selamat Datang di API Movies, Stranger!'))

fs.readdirSync('./routes').map((route) => {
  route = route.split('.')[0]
  return app.use(`/api/${route}`, require(`./routes/${route}`))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
