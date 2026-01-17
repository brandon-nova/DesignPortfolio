import React from 'react';
import '../styles/Timeline.css';

const Timeline = () => {
    const steps = [
        {
            year: 'PHASE 1',
            title: 'INITIALIZATION',
            description: 'Early experiments and learning the fundamentals. Focusing on function over form.',
            projects: ['Schoolpool', 'DiceAndDare', 'Storyse', 'LessCent', 'FinFree', 'PawPulse'],
            status: 'DEPRECATED'
        },
        {
            year: 'PHASE 2',
            title: 'REFINEMENT',
            description: 'Developing design systems and focusing on user experience. Structured architecture.',
            projects: ['PawPage', 'Finnodec', 'UseMaxify'],
            status: 'OPTIMIZED'
        },
        {
            year: 'CURRENT',
            title: 'DEPLOYMENT',
            description: 'High-performance, scalable, and aesthetic solutions.',
            projects: ['BrandonTNova'],
            status: 'ACTIVE'
        }
    ];

    return (
        <section id="journey" className="timeline-section">
            <div className="container">
                <h2 className="section-title text-mono">
                    <span className="text-accent">01. </span>
                    THE_JOURNEY
                </h2>

                <div className="timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker">
                                <div className="marker-dot"></div>
                                <div className="marker-line"></div>
                            </div>
                            <div className="timeline-content glass-panel">
                                <div className="timeline-header">
                                    <span className="timeline-year text-mono text-accent">{step.year}</span>
                                    <span className={`status-badge text-mono ${step.status === 'ACTIVE' ? 'status-active' : ''}`}>
                                        {step.status}
                                    </span>
                                </div>
                                <h3 className="timeline-title">{step.title}</h3>
                                <p className="timeline-description text-secondary">{step.description}</p>
                                <div className="project-tags">
                                    {step.projects.map((proj, i) => (
                                        <span key={i} className="project-tag text-mono">{proj}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
