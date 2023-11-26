import React, { useEffect, useState } from 'react';
import './DetailCard.scss';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { faUserCircle, faLocationDot, faDoorOpen, faMedal, faBed, faWifi, faCartFlatbedSuitcase, faCar, faWater, faMugSaucer, faPizzaSlice, faBath, faFan } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';
import { useUserContext } from '../../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DetailCard = () => {

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const navigate = useNavigate();
    const userState = useUserContext();
    const params = useParams();
    const products = useProductContext();
    const { detailProduct, getDetailProduct } = products;
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        if (params.id) { getDetailProduct(params.id); }
    }, [params, userState, navigate]);

    if (!detailProduct) {
        return <div>Loading...</div>;
    }

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleBookings = async () => {
        if (!userState.token) return navigate('/login');

        if (startDate && endDate) {
            console.log("product", detailProduct)
            const productData = { product: detailProduct._id, checkin: startDate, checkout: endDate, };

            try {
                const response = await fetch('http://localhost:9999/api/products', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', auth: `Bearer ${userState.token}`
                    },
                    body: JSON.stringify(productData),
                });

                if (response.ok) {
                    console.log('Bookings successful!');
                    navigate("/bookings")

                } else {
                    console.error('Bookings failed');
                    console.log(response);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            console.error('Invalid product dates');
        }
    };

    return (
        <div className='detail-card'>
            <header><h1>DETAILS</h1></header>
            <div className='detail-card-container'>
                <div className='detail-images-container'>
                    <div className='detail-imgURLs'>
                        <img className='imgURLs' src={detailProduct.imgURLs[0]} alt={detailProduct.title} />
                    </div>
                    <div className='detail-imgs-container'>
                        <div className='detail-imgs imgs-1'><img className='imgs' src={detailProduct.imgs[0]} alt={detailProduct.title} /></div>
                        <div className='detail-imgs imgs-2'><img className='imgs' src={detailProduct.imgs[1]} alt={detailProduct.title} /></div>
                        <div className='detail-imgs imgs-3'><img className='imgs' src={detailProduct.imgs[2]} alt={detailProduct.title} /></div>
                        <div className='detail-imgs imgs-4'><img className='imgs' src={detailProduct.imgs[3]} alt={detailProduct.title} /></div>
                    </div>
                </div>
                <div className='detail-info-container'>
                    <div className='product-detail-n-info-container'>
                        <div className='product-title-n-location-container'>
                            <h1>{detailProduct.title}&nbsp;</h1>
                            <h1>{detailProduct.location}</h1>
                        </div>
                        <div className='product-room-info-container'>
                            <h2>{detailProduct.guests} guests&nbsp;&#x2022;&nbsp;</h2>
                            <h2>{detailProduct.bedrooms} bedrooms&nbsp;&#x2022;&nbsp;</h2>
                            <h2>{detailProduct.baths} baths</h2>
                        </div>
                    </div>
                    <div className='product-host-container'>
                        <div><FontAwesomeIcon icon={faUserCircle} size='3x' className='host-icon' /></div>
                        <div className='text-v2'>
                            <h2>{detailProduct.host}&nbsp;is your host</h2>
                            <h4>Superhost&nbsp;&#x2022;&nbsp;4&nbsp;years as host</h4>
                        </div>
                    </div>
                    <div className='product-specific-info-container'>
                        <div className='product-specific-info'>
                            <div className='black-circle'><FontAwesomeIcon icon={faDoorOpen} size='2x' /></div>
                            <div className='text'>
                                <h2>Self check-in</h2>
                                <h4>You can check in with the building staff</h4>
                            </div>
                        </div>
                        <div className='product-specific-info'>
                            <div className='black-circle'><FontAwesomeIcon icon={faMedal} size='2x' /></div>
                            <div className='text'>
                                <h2>{detailProduct.host}&nbsp;is a superhost</h2>
                                <h4>Superhosts are experienced, highly rated Hosts</h4>
                            </div>
                        </div>
                        <div className='product-specific-info-v2'>
                            <div className='black-circle-v2'><FontAwesomeIcon icon={faLocationDot} size='2x' /></div>
                            <div className='text'>
                                <h2>Great location</h2>
                                <h4>90 % of recent guests gave the location a 5-star rating at google rewievs</h4>
                            </div>
                        </div>
                    </div>
                    <div className='product-desciption-container'>
                        <h2>Description</h2>
                        <h4>{detailProduct.description}</h4>
                    </div>
                    <div className='product-sleep-info-container'>
                        <div><h2>Where you&#x2019;ll sleep</h2></div>
                        <div className='product-sleep-container'>
                            <FontAwesomeIcon icon={faBed} />
                            <h4>Bedroom</h4>
                            <p>{detailProduct.bedrooms}&nbsp;king beds</p>
                        </div>
                    </div>
                    <div className='prodcut-offers-container'>
                        <div><h2>What this place offers</h2></div>
                        <div className='offers-container'>
                            <div className='offers-group-container'>
                                <div className='offers-group'><FontAwesomeIcon icon={faWifi} size='2x' /><p> Wifi</p></div>
                                <div className='offers-group'><FontAwesomeIcon icon={faCartFlatbedSuitcase} size='2x' /><p> Luggage drop-off allowed</p></div>
                                <div className='offers-group'><FontAwesomeIcon icon={faCar} size='2x' /><p> Free parking on premises</p></div>
                                <div className='offers-group-v2'><FontAwesomeIcon icon={faWater} size='2x' /><p> Beach access</p></div>
                            </div>
                            <div className='offers-group-container'>
                                <div className='offers-group'><FontAwesomeIcon icon={faMugSaucer} size='2x' /><p> Coffe maker</p></div>
                                <div className='offers-group'><FontAwesomeIcon icon={faPizzaSlice} size='2x' /><p> Food delivery</p></div>
                                <div className='offers-group'><FontAwesomeIcon icon={faBath} size='2x' /><p> Bathub/Shower</p></div>
                                <div className='offers-group-v2'><FontAwesomeIcon icon={faFan} size='2x' /><p> Courtyard view</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='calender-container'>
                        <div className='date-pick-container'>
                            <div className='date-pick-group'>
                                <label className='label'><h4>Check-In Date:</h4></label>
                                <DatePicker className='DatePicker'
                                    selected={startDate}
                                    onChange={handleStartDateChange}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                />
                            </div>
                            <div className='date-pick-group'>
                                <label className='label'><h4>Check-Out Date:</h4></label>
                                <DatePicker className='DatePicker'
                                    selected={endDate}
                                    onChange={handleEndDateChange}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                />
                            </div>
                        </div>
                        <div className='product-total-cost'><h4>{detailProduct.price}&nbsp;SEK per night</h4></div>
                        <div className="d-flex justify-content-center">
                            <button className='reserve-btn' onClick={handleBookings}>
                                <h4>Reserve</h4>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;