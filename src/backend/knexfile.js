const knex = require('knex')

const connetedknex = knex({
    client :"sqlite3",
    connection :{
        filename : "./db.sqlite3",
    },
    useNullAsDefault : true
})

module.exports = connetedknex;