// import React from 'react';
// import './LogoutModal.scss';
// import { useUserContext } from '../../context/UserContext';

// const LogoutModal = ({ show, onHide }) => {
//     const user = useUserContext(); // Assuming useUserContext is defined somewhere

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         user.setToken(null);
//         onHide(); // Close the modal after logout
//     };

//     return (
//         <Modal show={show} onHide={onHide} className='logout'>
//             <Modal.Body className='logout-container'>
//                 <Link to={`/`} onClick={handleLogout}>
//                     <div><h2>Logout</h2></div>
//                 </Link>
//             </Modal.Body>
//         </Modal>
//     );
// };

// export default LogoutModal;
