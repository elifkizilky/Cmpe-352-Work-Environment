const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const db = require('./config/database.js');
const Auth = require('./routes/auth.js')
const Post = require('./routes/post.js') //postu böyle karşılıyorum


dotenv.config();

const app = express();
app.use(cors()); //ekrana yazıcaz
//bunlar dışarıdan veri gönderildiğinde verinin sıkıntı olmadan yazılması için var
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))

// http/register olsun istiyorum, burda Auth olsun diye parametre olarak onu verdik
app.use('/', Auth);
//post için burda karşılamam gerekiyor
app.use('/', Post)

app.get('/', (req, res) => {
    res.json({message: "deneme deneme"})
})


const PORT = process.env.PORT || 5000;


db()

//server 5000de kalkcak
app.listen(PORT, () => {
    console.log("server is running on port: 5000");


})