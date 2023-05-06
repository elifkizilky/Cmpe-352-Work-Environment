//mesela sitede sepete ekledik, speete giderken login değilsek bizi login sayfasına atıyor, bunu bu sağlıyor

const jwt = require("jsonwebtoken");

const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        let decodedData;
        // "Bearer skndlknsdf" gibi gelen tokeni splitle ikiye ayırıyor : Bearer ve diğeri
        if(token) {
            decodedData = jwt.verify(token, process.env.SECRET_TOKEN)

            req.userId = decodedData?.id //varsa idyi at
        } else {
            decodedData = jwt.decode(token)

            req.userId = decodedData?.sub
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = auth