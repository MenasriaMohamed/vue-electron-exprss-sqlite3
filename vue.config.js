module.exports = {
    pluginOptions :{
        electronBuilder : {
            nodeIntegration : true,
            buildOptions : {
                extraFiles : [
                    "db.sqlite3"
                ]
            }
        }
    }
}