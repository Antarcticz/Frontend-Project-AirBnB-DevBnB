import React, { createContext, useContext, useState, useEffect } from 'react';

const defaultState = {
    user: null,
    token: null,
    bookings: [],
    setToken: () => { },
    makeBooking: () => { }
};

const UserContext = createContext(defaultState);

const UserProvider = ({ children }) => {
    
    const [userState, setUserState] = useState(defaultState);

    const setToken = (token) => {
        setUserState((prevState) => ({ ...prevState, token }));
    };

    const makeBooking = (booking) => {
        setUserState((prevState) => ({
            ...prevState,
            bookings: [...prevState.bookings, booking],
        }));
    };

    useEffect(() => {

        const token = localStorage.getItem("TOKEN")
        if (token !== null) {
            setUserState((prevState) => ({
                ...prevState,
                token
            }));
        }
    }, []);

    useEffect(() => {

        if (userState.token) { fetchUserData(); }
    }, [userState.token]);

    const fetchUserData = async () => {

        try {
            const userData = await fetch('http://localhost:9999/api/users/me', {
                headers: {
                    Authorize: `Bearer ${userState.token}`,
                },
            });

            const bookingsData = await fetch('http://localhost:9999/api/bookings/user/me', {
                headers: {
                    Authorize: `Bearer ${userState.token}`,
                },
            });

            const user = await userData.json();
            const bookings = await bookingsData.json();

            setUserState((prevState) => ({ ...prevState, user, bookings }));

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <UserContext.Provider value={{ ...userState, setToken, makeBooking }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};

export default UserProvider;
