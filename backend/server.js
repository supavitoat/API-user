const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const {swaggerUi,swaggerSpec} = require('./swagger')

const user = require('./routes/user')

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(cors())
app.use('/api',user)



app.listen(5000,()=> console.log('Server is Running on port 5000'))