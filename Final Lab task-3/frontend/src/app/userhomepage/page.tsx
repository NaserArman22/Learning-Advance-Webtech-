
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    pname: string;
    description: string;
}

interface CartItem {
    id: number;
    pid: number;
}

const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
       
        axios.get<Product[]>('http://localhost:3001/product')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });

        
        axios.get<CartItem[]>('http://localhost:3001/cart')
            .then(response => {
                setCart(response.data);
            })
            .catch(error => {
                console.error('Error fetching cart items:', error);
            });
    }, []);

    const addToCart = (productId: number) => {
      
        axios.post<CartItem[]>('http://localhost:3001/cart/add', { userId: 1, pid: productId })
            .then(response => {
              
                setCart(response.data);
            })
            .catch(error => {
                console.error('Error adding to cart:', error);
            });
    };

    return (
        <div>
            <h1>Products</h1>
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        <h2>{product.pname}</h2>
                        <p>{product.description}</p>
                        <button onClick={() => addToCart(product.id)} style={{ color: 'blue' }}>Add to Cart</button>

                    </div>
                ))}
            </div>
            <h1>Cart</h1>
            <div>
                {cart.map(item => (
                    <div key={item.id}>
                        <p>Product ID: {item.pid}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
