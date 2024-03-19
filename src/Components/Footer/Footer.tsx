import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>
        
        <div className='footer-design z-n1 '>
            
            <p>
                <img className='footer-logo' src="Senza titolo-1.png" alt="" />
                © 2024 White Wale, Inc.
            </p>
            <ul>
                <h4>Links</h4>
                <a href='#'>Privacy</a>
                <a href='#'>Terms</a>
                <a href='#'>Sitemap</a>
            </ul>
            <ul>
                <h4>Social</h4>
                <a href='#'>Facebook</a>
                <a href='#'>Twitter</a>
                <a href='#'>Instagram</a>
                <a href='#'>LinkedIn</a>
            </ul>
            <ul>
                <h4>Company</h4>
                <a href='#'>About</a>
                <a href='#'>Blog</a>
                <a href='#'>Careers</a>
                <a href='#'>Support</a>
                <a href='#'>Contact</a>
            </ul>
        </div>
        </>
    )
}

export default Footer
