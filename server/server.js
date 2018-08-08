// import serverConfig from './config'

const express = require('express')

// Constants
const PORT = 8888
const HOST = '0.0.0.0'

// App
const app = express()
app.get('/', (req, res) => {
  console.log('Sending Hello World now............')
  res.send('Hello world\n')
})

// app.listen(serverConfig.port, () => console.log('Example app listening on port ${serverConfig.port}!'))

app.listen(PORT, HOST)
console.log('Running on http://${HOST}:${PORT}')
