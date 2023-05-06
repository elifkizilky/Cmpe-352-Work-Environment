const mongoose = require('mongoose');

//database bağla, bağlanınca bir şey yazıyor, hata alınca başka bir şey
const db = () => {
    //mantıklı bir mongodb url lazım
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("mongoDB connectttt");
    }).catch((err)=>{
        //throw new Error(err.message) //böyle mesaj yazdırabiliriz
        console.log(err);
    })
}

module.exports = db //dışarıya export ediyorum bunu