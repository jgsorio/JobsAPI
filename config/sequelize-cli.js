const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    dialect: 'postgres',
    url: process.env.DATABASE_URL
}