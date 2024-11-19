import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Footer() {
    const handleNavigation = (url) => {
        window.location.href = url;
    };

    return (
        <footer>
            <div className="footer-content">
                <p>Connect with me:</p>
                <div className="social-icons">
                    <div
                        onClick={() => handleNavigation("https://www.facebook.com/diart.pllana.1/")}
                        aria-label="Facebook"
                        style={{ cursor: 'pointer' }}
                    >
                        <BsFacebook />
                    </div>
                    <div
                        onClick={() => handleNavigation("https://www.instagram.com/diartpllana_/")}
                        aria-label="Instagram"
                        style={{ cursor: 'pointer' }}
                    >
                        <BsInstagram />
                    </div>
                    <div
                        onClick={() => handleNavigation("https://www.linkedin.com/in/diart-pllana-52627b278/")}
                        aria-label="LinkedIn"
                        style={{ cursor: 'pointer' }}
                    >
                        <BsLinkedin />
                    </div>
                    <div
                        onClick={() => handleNavigation("https://github.com/DiartPllana")}
                        aria-label="GitHub"
                        style={{ cursor: 'pointer' }}
                    >
                        <BsGithub />
                    </div>
                </div>
            </div>
        </footer>
    );
}
