import React, { useEffect } from 'react'
import './Support.scss';

const SupportForm = () => {

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className='support'>
            <header><h1>SUPPORT</h1></header>
            <form className='sup-form'>
                <div className='sup-form-group'>
                    <label><h2>Email</h2></label>
                    <input type="email" />
                </div>
                <div className='sup-form-group'>
                    <label><h2>Message</h2></label>
                    <textarea></textarea>
                </div>
                <button className='sup-btn'><h4>Send</h4></button>
            </form>
        </div>
    );
}

export default SupportForm;
