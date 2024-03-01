import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController"
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.post('/crud', homeController.getcrud);
    router.get('/display', homeController.display);
    router.get('/edit-crud', homeController.edit_CRUD);
    router.post('/put-crud', homeController.put_CRUD);
    router.get('/delete-crud', homeController.delete_CRUD);
    router.post('/api/login', userController.handlogin);
    router.post('/system/addNewUser', userController.addNewUser);
    router.post('/system/getAll', userController.getAllUser);
    return app.use("/", router);

}

module.exports = initWebRoutes;