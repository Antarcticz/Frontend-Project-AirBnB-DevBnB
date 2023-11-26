import React, { useEffect } from 'react'
import laptop from '../../assets/about_img.png';
import './About.scss';

const AboutPage = () => {

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className='about'>
            <div><header><h1>ABOUT</h1></header></div>
            <div><img className='laptop-img' id='laptop-img' src={laptop} alt="laptop" /></div>
            <div className='text-container'>
                <div className='line-v1'></div>
                <div><h2>Welcome to DevBnB: Where Developers Feel at Home</h2></div>
                <div><h3>Are you a developer looking for a comfortable and inspiring space to code, collaborate, and connect with like-minded individuals? Look no further than DevBnB - your ultimate Airbnb for developers!</h3></div>
                <div><h3>At DevBnb, we understand the unique needs of developers. Whether you're a seasoned pro or just starting your coding journey, our platform offers a curated selection of developer-friendly accommodations around the world.</h3></div>
                <div><h3>From cozy coding corners to fully-equipped tech havens, each listing is vetted to ensure it meets the standards of the coding community.</h3></div>
                <div className='line-v2'></div>
                <div><h2>Why DevBnb?</h2></div>
                <div><h3>Developer-Focused Amenities: Enjoy high-speed internet, ergonomic workstations, and coding-friendly environments tailored to boost your productivity.</h3></div>
                <div><h3>Community Networking: Connect with fellow developers, attend coding meetups, and collaborate on exciting projects, all within the comfort of your DevBnb space.</h3></div>
                <div><h3>Global Reach: Explore coding-friendly accommodations in tech hubs worldwide, allowing you to work and travel seamlessly.</h3></div>
                <div><h3>Secure and Trusted: Rest easy knowing that your stay is secure, with reliable hosts and verified listings designed specifically for developers.</h3></div>
                <div><h3>Make DevBnb your home away from home and elevate your coding experience. Book your stay today and unlock a world of opportunities for learning, collaboration, and innovation.</h3></div>
                <div className='line-v1'></div>
            </div>
        </div>
    )
}

export default AboutPage