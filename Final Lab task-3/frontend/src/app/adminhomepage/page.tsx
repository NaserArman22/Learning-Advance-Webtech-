"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ pname: '', description: '' });
    const [updateProduct, setUpdateProduct] = useState({ id: null, pname: '', description: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/product');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const deleteProduct = async (productId: number) => {
        try {
            await axios.delete(`http://localhost:3001/product/${productId}`); 
            fetchProducts(); 
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const addProduct = async () => {
        try {
            await axios.post('http://localhost:3001/product/product', newProduct);
            setNewProduct({ pname: '', description: '' });
            fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const updateProductById = async () => {
        try {
            await axios.put(`http://localhost:3001/product/${updateProduct.id}`, updateProduct);
            setUpdateProduct({ id: null, pname: '', description: '' });
            fetchProducts();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleChange = (e: any) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleUpdateChange = (e: any) => {
        setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value });
    };

    const startUpdate = (product) => {
        setUpdateProduct({ id: product.id, pname: product.pname, description: product.description });
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Add Product</h2>
            <div>
                <label>Product Name: </label>
                <input type="text" name="pname" value={newProduct.pname} onChange={handleChange} />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" name="description" value={newProduct.description} onChange={handleChange} />
            </div>
            <button onClick={addProduct}>Add Product</button>
            <hr />
            <h2>Update Product</h2>
            <div>
                <label>Product Name: </label>
                <input type="text" name="pname" value={updateProduct.pname} onChange={handleUpdateChange} />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" name="description" value={updateProduct.description} onChange={handleUpdateChange} />
            </div>
            <button onClick={updateProductById}>Update Product</button>
            <hr />
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <span>{product.pname}</span>
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                        <button onClick={() => startUpdate(product)}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;
