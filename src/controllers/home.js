const ProductoService = require("../services/producto");

productoService = new ProductoService();

exports.homeRender = async(req,resp) => {    
    let productos = await productoService.getAllProductos();   
    resp.render('home', {productos: productos});
};
