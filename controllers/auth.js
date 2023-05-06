const Auth = require('../models/auth.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async(req, res) => {
    try {
        const {username, email, password} = req.body //bunlar bana userdan gelecek
        //email karşılaştırma işlemi yapılmalı, async fonksyon işlemlerin yapılmasını beklicek
        const user = await Auth.findOne({email}) //kişinin emailini modeller, db içerisinden bulmaya çalış, bulursan register etme, kullanımda
        
        if(user) { //eğer user varsa hata var, 500 server hatası, diğer hata kodları da var
            return res.status(500).json({message: "Bu email hesabı zaten bulunmakta!"})
        }


        if(password.length < 6) {
            return res.status(500).json({message: "Parolanız 6 karakterden küçük olmamalı"})
        }

        //pasword düzgünse bunun güvenliğini sağlamaka lazım, o yüzden hashlıyoruz
        const passwordHash = await bcrypt.hash(password, 12) //passwordu güvenli hale getiriyor

        const newUser = await Auth.create({username, email, password: passwordHash})
        //newUser üzerinden token oluşturup return et, frontend tarafında kullanılacak güvenlik zaafiyetlerine yol açmıcak bir yapı

        const userToken =  jwt.sign({id: newUser.id}, process.env.SECRET_TOKEN, {expiresIn: '1h'});

        //başarılı bir şekilde dönüş
        res.status(201).json({
            status: "Ok",
            newUser,
            userToken
        })
    } catch (error) {
        return res.status(500).json({message: error.message})

    }
}

const login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await Auth.findOne({email}); //email buluyorsa ok
        
        //user bulunamaması case
        if(!user){
            return res.status(500).json({message : "Böyle bir kullanıcı bulunamadı"})
        }
        //password kıyaslanması lazım -> compare komutu

        const comparePassword = await bcrypt.compare(password, user.password)

        if(!comparePassword) {
            return res.status(500).json({message: "Parolanız hatalı"})
        }

        const token = jwt.sign({id: user.id}, process.env.SECRET_TOKEN, {expiresIn: '1h'})
        res.status(200).json({
            status: "Ok",
            user,
            token
        })
    } catch (error){
        return res.status(500).json({message: error.message})
    }

}

module.exports = {register, login}