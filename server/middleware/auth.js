import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test');//same as in user.js controller
            req.userId = decodedData?.id;


        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;  //google's name for specific id
        }
        next();

    } catch (error) {
        console.log(error);
    }
}

// somebody wants to like a post
// click like button 
// midddleware determines if it can be done based on the token
// if yes call like controller (next)
export default auth;