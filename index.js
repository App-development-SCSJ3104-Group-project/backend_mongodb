const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')

mongoose.connect("mongodb+srv://ahmadelraqab:123123258Aa@cluster0.whjky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.options('*', cors());

const subscribersRouter = require('./routes/subscribers')
const usersRouter = require("./routes/user");
const ordersRouter = require('./routes/order')
app.use('/subscribers', subscribersRouter)
app.use('/users', usersRouter)
app.use("/orders", ordersRouter)


app.listen(process.env.PORT || 5000, () => console.log('Server Started'))