import serverConfig from './config'

const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(serverConfig.port, () => console.log('Example app listening on port ${serverConfig.port}!'))
