const Producto = require('../model/productosmodel');

exports.createProducto = async (req, res) =>{
    try {
        const { nombre, descripcion, precio } = req.body;
        const nuevoProducto = new Producto({ nombre, descripcion, precio });
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getProductos = async(req, res) =>{
    try {
        const productos = await Producto.find();
        res.json(productos); 
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server')
    }
}

exports.updateProducto = async (req, res) =>{
    try {
        const { nombre, descripcion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({msg:'Product not found, try with other Product'})
        }
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.precio = precio;
        producto = await producto.save();
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}    

exports.getProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            return res.status(404).json({msg:'Product not found, try with other Product'})
        }
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            return res.status(404).json({msg:'Product not found, try with other Product'})
        }
        await Producto.findByIdAndRemove(req.params.id);
        res.json({msg:"Product deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}
