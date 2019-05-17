import testData from '../testdata.js'
import Mongoose from 'mongoose';
import Product from '../models/product.js';
import Category from '../models/category.js';

const ObjectId = Mongoose.Types.ObjectId;

export default function SportsStoreController(router) {
    this.router = router;

    this.getAll = function (req, res) {
        //this.testData.bind(this);
        Product.find({})
            .populate('category', 'name')
            .exec((err, products) => {
                if (err) {
                    res.status(500).json({ message: err });
                }
                //console.log(products);
                //console.log(products[0].toJSON());
                res.status(200).json(products);
            });
        //res.status(200).json({ products: testData().products, categories: testData().categories });
    };

    this.addProduct = function (req, res) {
        let newProduct = new Product();
        newProduct.name = req.body.name;
        newProduct.description = req.body.description;
        newProduct.price = req.body.price;
        newProduct.category = ObjectId(req.body.categoryId);

        //console.log("addProduct: " + newProduct);

        newProduct.save((err, prod) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: err });
            }
            res.status(200).json(prod);
        });
    };

    this.updateProduct = function (req, res) {
        let productToUpdate = {            
            name: req.body.name,
            category: req.body.categoryId,
            description: req.body.description,
            price: req.body.price,
        };
        //console.log(req.body);

        Product.findByIdAndUpdate(req.params.id, { $set: productToUpdate }, { new: true }, (err, product) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: err });
            }
            //console.log(product);
            res.status(200).json(product);
        });
    };

    this.deleteProduct = function (req, res) {

    };

    this.addOrder = function (req, res) {

    };

    this.getAllOrders = function (req, res) {

    };

    this.addCategory = function (req, res) {
        let newCategory = new Category();
        newCategory.name = req.body.name;
        newCategory.description = req.body.description;

        newCategory.save((err, category) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: err });
            }
            res.status(200).json(category);
        });
    };

    this.getAllCategories = function (req, res) {
        Category.find({}, (err, categories) => {
            if (err) {
                res.status(500).json({ message: err });
            }
            //console.log(categories[0].toJSON());
            res.status(200).json(categories);
        });
    };

    this.updateCategory = function (req, res) {
        console.log(req.params.id);

        let categoryToUpdate = { name: req.body.name, description: req.body.description };

        Category.findByIdAndUpdate(req.params.id, { $set: categoryToUpdate }, { new: true }, (err, category) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: err });
            }
            console.log(category);
            res.status(200).json(category);
        });
    };

    this.deleteCategory = function (req, res) {
        Category.deleteOne({ _id: req.params.id }, (err, category) => {
            if (err) {
                res.status(500).json({ message: err });
            }
            // res.status(200).json({ message: 'Category Successfully Removed' });
            res.status(200).json(category);
        });
    };



    // router.get('/products', this.getAll.bind(this));
}