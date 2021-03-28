const express = require('express');
const env = require('dotenv')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const todoRoutes = require('./routes/todo');

env.config();


mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.w09eq.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
{
  useNewUrlParser: true,
useUnifiedTopology:true,
useCreateIndex:true

}).then(() => {
console.log('Database Connected ')
})


app.use(bodyParser());



app.use(express.json())
app.use('/api', todoRoutes); 

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})