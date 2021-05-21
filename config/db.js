const mongoose = require('mongoose');

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
        console.log(`Connected to Database: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

}

module.exports = connect;
