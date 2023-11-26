import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';
import './ProductCard.scss';

const ProductCard = () => {

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const { products } = useProductContext();

    if (!products.length) {
        return <div>Loading...</div>;
    }

    return (
        <div className='product-card'>
            <header><h1>HOME</h1></header>
            <div className='product-card-container'>
                {products.map((product) => (
                    <div className='card'>
                        <React.Fragment key={product._id}>
                            <Link to={`/details/${product._id}`}>
                                <div className='product-img-container'>
                                    <img className='product-img' src={product.imgURLs[0]} alt={product.title} />
                                </div>
                            </Link>
                            <div className='card-content'>
                                <div className='product-title-n-location'>
                                    <div className='product-title'><h2>{product.title}</h2></div>
                                    <div className='product-location'><h2>{product.location.slice(0, 21)}</h2></div>
                                </div>
                                <div><h4>{product.host}</h4></div>
                                <div><h4>{product.date}</h4></div>
                                <div className='product-price-n-offers'>
                                    <div className='product-price-n-night'>
                                        <div className='product-price'><p>{product.price}</p></div>
                                        <div className='product-night'><p>SEK per night</p></div>
                                    </div>
                                    <div className='product-offers'><img src={product.offers} alt="wifi" /></div>
                                </div>
                            </div>
                        </React.Fragment>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard;
