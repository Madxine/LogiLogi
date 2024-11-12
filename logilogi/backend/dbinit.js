const mongoose = require('mongoose');
const connectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGE_URI);
    console.log(`MongeDB connected: ${conn.connection.name}`.bgMagenta)
};

module.exports = connectDB