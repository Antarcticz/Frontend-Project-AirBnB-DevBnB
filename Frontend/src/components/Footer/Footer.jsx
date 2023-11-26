import React from 'react'
import youtube from '../../assets/youtube_logo.png';
import instagram from '../../assets/instagram_logo.svg'
import twitter from '../../assets/twitter_logo.png'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <div className='line-v3'></div>
            <div className='footer-link-container'>
                <div className='footer-links'>
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                    <p>Link 4</p>
                    <p>Link 5</p>
                </div>
                <div className='footer-links'>
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                    <p>Link 4</p>
                    <p>Link 5</p>
                </div>
                <div className='footer-links'>
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                    <p>Link 4</p>
                    <p>Link 5</p>
                </div>
            </div>
            <div className='line-v3'></div>
            <div className='footer-bottom'>
                <div className='logotype'><h1>DevBnB</h1></div>
                <div className='copyright'>
                    <div><h1>&copy;</h1></div>
                    <div><p>2023 DevBnB Coders Inc.</p></div>
                </div>
                <div className='logo-container'>
                    <div><img className='youtube-img' id='youtube-img' src={youtube} alt="youtube" /></div>
                    <div><img className='instagram-img' id='instagram-img' src={instagram} alt="instagram" /></div>
                    <div><img className='twitter-img' id='twitter-img' src={twitter} alt="twitter" /></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer