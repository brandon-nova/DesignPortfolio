import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="copyright text-secondary text-sm">
                    &copy; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
