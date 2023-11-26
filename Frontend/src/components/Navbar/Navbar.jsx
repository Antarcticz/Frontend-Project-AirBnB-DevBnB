import React, { useState } from 'react';
import './Navbar.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import LoginAndRegisterModal from '../Modals/LoginAndRegisterModal/LoginAndRegisterModal';

const UserNavbar = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Navbar className="navbar p-0 d-flex" variant="dark" expand="lg">

            <Navbar.Brand href="/">DevBnB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                    <Nav.Link to="/bookings" as={NavLink}>Bookings</Nav.Link>
                    <Nav.Link to="/support" as={NavLink}>Support</Nav.Link>
                </Nav>
                <Nav>
                <button className='hamburger-menu-btn' onClick={handleShowModal}>
                    <div><FontAwesomeIcon className='hamburger-icon' icon={faHamburger} /></div>
                    <div><FontAwesomeIcon className='user-icon' icon={faCircleUser} /></div>
                </button>
                <LoginAndRegisterModal show={showModal} onHide={handleCloseModal} />
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default UserNavbar;
