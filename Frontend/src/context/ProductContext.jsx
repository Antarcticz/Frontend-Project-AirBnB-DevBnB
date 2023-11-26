import React, { createContext, useState, useEffect, useContext } from 'react';
import Axios from 'axios';

const defaultState = {
    products: [],
    detailProduct: null,
    getDetailProduct: (_id) => { }
};

const ProductContext = createContext(defaultState);

const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [detailProduct, setDetailProduct] = useState(null);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {

        Axios.get('http://localhost:9999/api/products')
            .then(response => {
                console.log("Response from backend:", response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const getDetailProduct = (productId) => {

        Axios.get(`http://localhost:9999/api/products/${productId}`)
            .then(response => {
                console.log("Detail Product Data:", response.data);
                setDetailProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching detail product data:', error);
            });
    };

    return (
        <ProductContext.Provider value={{ products, detailProduct, getDetailProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};

export default ProductProvider;
