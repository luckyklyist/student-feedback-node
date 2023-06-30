import dotenv from 'dotenv';
dotenv.config()

export default{
    port:process.env.PORT,
    dbURI:process.env.DB_URI,
    jwtSecretKey:process.env.JWT_SECRET_KEY
}