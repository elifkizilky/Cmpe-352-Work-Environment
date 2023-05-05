const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    console.log('Here')
    //res.sendStatus(500) //more general, 500 error
    //res.status(500).send('Hi') //mesaj değişiyor sadece ekranda ama google incele/consoleda hata var
    //res.status(500).json({ message: "Error" }) //json code görünüyor
    //res.download("server.js")
    //res.json({ message: "Error" }) //success send
    res.render("index", { text123: "World"}) //orda default yaptığımız için direrkt text yapmadığımızda default çalışıyor
    
})

app.listen(3000)