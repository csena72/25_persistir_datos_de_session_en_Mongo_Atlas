const homeController = require('../controllers/home');
const loginController = require('../controllers/login');
const registerController = require('../controllers/register');
const productoController = require('../controllers/producto');
const mensajeController = require('../controllers/mensaje');

module.exports = (router) => {

    router

    .get('/', loginController.loginRender)
    .get('/register', registerController.registerRender)
    .get('/home', homeController.homeRender)

    .post('/api/productos', productoController.createProducto)
    .get('/api/productos', productoController.findAllProductos)    
    .get('/api/productos/:id', productoController.getOneProducto)
    .patch('/api/productos/:id', productoController.updateProducto)
    .delete('/api/productos/:id', productoController.deleteProducto)

    .post('/api/mensajes', mensajeController.createMensaje)
    .get('/api/mensajes', mensajeController.findAllMensajes)    
    
    return router;
}