const mongoose = require('mongoose')

module.exports = {
    getRandomElements: (arr, ammount) => {
        const randoms = []

        const pushToRandomsArr = (randomsArr) => {
            const index = Math.floor(Math.random()) * arr.length
            randomsArr.push(arr[index])
        }

        while (randoms.length < ammount) {
            pushToRandomsArr(randoms)
        }
        return randoms
    },
    connectDb: async () => {
        const mongoUrl = 'mongodb://localhost/chatrooms_test'
        const mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        await mongoose.connect(mongoUrl, mongooseOptions)
    },
    closeDb: async () => mongoose.connection.close(),
    clearDatabase: async () => {
        const colNames = await mongoose.connection.db.listCollections().toArray()
        colNames.forEach(async collection => await mongoose.connection.dropCollection(collection.name))
    }
}