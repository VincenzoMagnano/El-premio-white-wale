import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='main-div'>
            <div className='footer-intro' >
                <h4>Get connected with us on social media</h4>
                <div className='social-icons'>
                    <a className='social-link-des' href='#'> <i className="ri-instagram-line mx-2"></i></a>
                    <a className='social-link-des' href='#'> <i className="ri-tiktok-fill mx-2 "></i></a>
                    <a className='social-link-des' href='#'> <i className="ri-twitch-fill mx-2 "></i></a>
                </div>
            </div>
            <hr/>

            <div className='footer-details'>
                <p className='logo-des'><img style={{width:"200px"}} src="Senza titolo-1.png" alt="" /> © 2024 White Wale, Inc.</p>
                <div className='footer-links'>
                    <div className='links-des'>
                        <h4>Links</h4>
                        <ul>
                            <a href='#'>Privacy</a>
                            <a href='#'>Terms</a>
                            <a href='#'>Sitemap</a>
                        </ul>
                    </div>
                    
                    <div className='links-des'>

                        <h4>Social</h4>
                    <ul>
                        <a href='#'>Facebook</a>
                        <a href='#'>Twitter</a>
                        <a href='#'>Instagram</a>
                        <a href='#'>LinkedIn</a>
                    </ul>
                    </div>
                    <div className='links-des'>
                        <h4>Company</h4>
                    <ul>
                        <a href='#'>About</a>
                        <a href='#'>Blog</a>
                        <a href='#'>Careers</a>
                        <a href='#'>Support</a>
                        <a href='#'>Contact</a>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
