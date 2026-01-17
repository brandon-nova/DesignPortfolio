import React, { useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
    const base = import.meta.env.BASE_URL;

    return (
        <section className="hero">
            <div className="video-background">
                <video autoPlay loop muted playsInline className="hero-video">
                    <source src={`${base}assets/Portfolio.mp4`} type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Building Beautiful <br />
                        Digital Experiences.
                    </h1>
                    <a href="#journey" className="journey-link-text">
                        Journey <span className="arrow">→</span>
                    </a>
                </div>
            </div>

            <a href="#journey" className="scroll-indicator" aria-label="Scroll to Journey">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </a>
        </section>
    );
};

export default Hero;
