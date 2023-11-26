import React from 'react';
import './LoginAndRegisterModal.scss';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginAndRegisterModal = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide} className='login-n-register'>
            <Modal.Body className='login-n-register-container'>
                <Link to={`/login`} onClick={onHide}><div><h2>Login</h2></div></Link>
                <Link to={`/register`} onClick={onHide}><div><h2>Register</h2></div></Link>
            </Modal.Body>
        </Modal>
    );
};

export default LoginAndRegisterModal;