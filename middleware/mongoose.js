/// Try to added the optional code for the admin and users role and hopefully it worked. I have learned few things while finding the node.js and using other module's to find the answer.

const AdminBro = require('./adminbro');
const AdminBroMongoose = require('@admin-bro/mongoose');

AdminBro.registerAdapter(AdminBroMongoose)

const mongoose = require('mongoose')

require('path-to-your/mongoose-model1')
require('path-to-your/mongoose-model2')

const run = async () => {
    const connection = await mongoose.connect('mongodb://localhost:8000/auth',{
        useNewUrlParser: true,
    })
    const AdminBro = new AdminBro ({
        Database: [connection]
    })
}
run()