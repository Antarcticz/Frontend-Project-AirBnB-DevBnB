import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../context/UserContext';
import './Bookings.scss'

const BookingsCard = () => {

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const [bookings, setBookings] = useState([]);
    const userState = useUserContext();

    useEffect(() => {
        if (userState.token) {

            fetch('http://localhost:9999/api/bookings/user/me', {
                headers: {
                    'Content-Type': 'application/json',
                    auth: `Bearer ${userState.token}`
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("bookings: ", data)
                    setBookings(data)
                })
                .catch((error) => console.error('Error fetching bookings:', error));
        }
    }, [userState.token]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const calculateTotalPrice = (checkin, checkout, pricePerNight) => {
        const startDate = new Date(checkin);
        const endDate = new Date(checkout);
        const numberOfNights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        const totalPrice = numberOfNights * pricePerNight;
        return totalPrice;
    };

    return (

        <div className='bookings'>
            <header><h1>BOOKINGS</h1></header>
            {bookings.map((booking) => (
                <div className="d-flex flex-column align-items-center mt-4 mb-4">
                    <div className="booking-container">
                        <div className='bookings-imgURLs-n-cost-info'>
                            <div className='bookings-imgURLs'><img className='imgURLs' src={booking.product.imgURLs[0]} alt="" /></div>
                            <div className='bookings-cost-info-container'>
                                <div className='bookings-title'><h4>{booking.product.title}</h4></div>
                                <div className='bookings-info'><h2>{booking.product.location}</h2></div>
                                <div className='bookings-cost-per-night-n-total'>
                                    <div><h3>Period: {formatDate(booking.checkin)} - {formatDate(booking.checkout)}</h3></div>
                                    <div><h3>Price per night: ${booking.product.price}</h3></div>
                                </div>
                                <div className='line-v4'></div>
                                <div className='bookings-in-total'>
                                    <div><h3>Total SEK</h3></div>
                                    <div><h3><div><h3>{calculateTotalPrice(booking.checkin, booking.checkout, booking.product.price)}&nbsp;kr</h3></div></h3></div>
                                </div>
                            </div>
                        </div>
                        <div className='booking-btn-container'>
                            <button className='remove-btn'><h4>Remove</h4></button>
                            <button className='continue-btn'><h4>Continue</h4></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookingsCard;
