const { connectDb, closeDb, clearDatabase } = require('./helpers')
const seedDatabase = require('./seed')

main().then(() => 'Setup succesfull').catch(err => console.log(`An error occured: ${err}`))

async function main() {
    await connectDb()
    await clearDatabase()
    await seedDatabase()
    await closeDb()
}
