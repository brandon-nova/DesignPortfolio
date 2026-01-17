import React from 'react';
import '../styles/Projects.css';

const projects = [
    {
        name: 'BrandonTNova',
        description: 'Personal portfolio and brand website',
        url: 'https://brandontnova.com',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        name: 'UseMaxify',
        description: 'Productivity tool for maximizing output',
        url: 'https://usemaxify.com',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        name: 'Finnodec',
        description: 'Financial decision-making platform',
        url: 'https://finnodec.com',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        name: 'PawPage',
        description: 'Pet care and community platform',
        url: 'https://pawpage.net',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
        name: 'PawPulse',
        description: 'Pet health monitoring application',
        url: 'https://pawpulse.org',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
        name: 'FinFree',
        description: 'Financial freedom tracking tool',
        url: 'https://finfree.me',
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
    },
    {
        name: 'LessCent',
        description: 'Budget and savings optimizer',
        url: 'https://www.lesscent.com',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
        name: 'Storyse',
        description: 'Storytelling and content platform',
        url: 'https://storyse.com',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
        name: 'DiceAndDare',
        description: 'Interactive gaming experience',
        url: 'https://diceanddare.app',
        gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
    },
    {
        name: 'Schoolpool',
        description: 'Educational resource sharing platform',
        url: 'https://schoolpool.com',
        gradient: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card"
                            style={{ '--card-gradient': project.gradient }}
                        >
                            <div className="project-card-inner">
                                <h3 className="project-name">{project.name}</h3>
                                <p className="project-description">{project.description}</p>
                                <span className="project-link">Visit Site →</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
