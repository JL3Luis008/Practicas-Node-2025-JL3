const mongoose = require('mongoose')

const connectDB = async(app) => {
    const strConnection = 'mongodb://localhost:27017/practica09';
    try {
        await mongoose.connect(strConnection, {
        useNewUrlParser:true,
        UseUnifiedTopology:true,
    });
    console.log('mongoDB is connected');   
} catch (error) {
    console.error(error);
    process.exit(1);
}
}

module.exports = connectDB;
