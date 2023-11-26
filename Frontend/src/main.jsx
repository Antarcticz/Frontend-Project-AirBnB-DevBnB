import React from 'react'
import ReactDOM from 'react-dom/client'
import UserProvider from './context/UserContext';
import ProductProvider from './context/ProductContext';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserProvider>
            <ProductProvider>
                <App />
            </ProductProvider>
        </UserProvider>
    </React.StrictMode>,
)
