const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const db = require('./models/index');
// const UserService = require('./services/user-service');

const { User, Role } = require('./models/index');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);

        // const u1 = await User.findByPk(2);
        // const r1 = await Role.findByPk(1);
        // u1.addRole(r1);
        // const response = await r1.getUsers();
        // console.log(response);


        // const service = new UserService();
        // const newToken = service.createToken({ email: 'ashwin@admin.com', id: 1 });
        // console.log("new token is", newToken);

        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzaHdpbkBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNzE3ODM4Mjg0LCJleHAiOmE3MTc5MjQ2ODR9.MAeEA3fa5EXcXvKTXtLp6HesACpXJropI8ymdRJNiH0";

        // const response = service.verifyToken(token);
        // console.log(response);

        
        // To sync db to add User_Roles

        // if(process.env.DB_SYNC) {
        //     db.sequelize.sync({alter: true});
        // }
    });
}   

prepareAndStartServer();