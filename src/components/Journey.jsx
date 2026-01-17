import React, { useEffect, useRef, useState } from 'react';
import '../styles/Journey.css';

// Projects ordered from earliest (worst) to latest (best)
const journeyProjects = [
    {
        name: 'Schoolpool',
        description: 'One of the first sites I made. Basic functionality, minimal design consideration.',
        url: 'https://schoolpool.app',
        phase: 'The Beginning',
        year: '2022',
        image: '/assets/projects/schoolpool.png',
        gradient: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)'
    },
    {
        name: 'DiceAndDare',
        description: 'Learned that hosting a bunch of videos is really expensive, but that html can make a decent site.',
        url: 'https://diceanddare.app',
        phase: 'Early Experiment',
        year: '2022',
        image: '/assets/projects/diceanddare.png',
        gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
    },
    {
        name: 'Storyse',
        description: 'Wanted to learn AI apis, this was one of my first app so many mistakes made along the way.',
        url: 'https://storyse.com',
        phase: 'Finding Direction',
        year: '2023',
        image: '/assets/projects/storyse.png',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
        name: 'LessCent',
        description: 'First attempts at making an app where users could affect each other, did not pursue userbase.',
        url: 'https://www.lesscent.com',
        phase: 'Design Awareness',
        year: '2023',
        image: '/assets/projects/lesscent.png',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
        name: 'FinFree',
        description: 'First attempt at mobile/web integrated development. I realized it\'s hard for users to tell what this is, didn\'t fix but rememebered that.',
        url: 'https://finfree.me',
        phase: 'Growing Skills',
        year: '2023',
        image: '/assets/projects/finfree.png',
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
    },
    {
        name: 'PawPulse',
        description: 'This was a social media with matching but got turned into a landing page due to partner decision. Learned color schemes.',
        url: 'https://pawpulse.org',
        phase: 'Refinement',
        year: '2024',
        image: '/assets/projects/pawpulse.png',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
        name: 'PawPage',
        description: 'Polished interfaces with attention to micro-interactions.',
        url: 'https://pawpage.net',
        phase: 'Professional Quality',
        year: '2024',
        image: '/assets/projects/pawpage.png',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
        name: 'Finnodec',
        description: 'Clean, modern design with strong visual identity. This site is to manage long term investments.',
        url: 'https://finnodec.com',
        phase: 'Mastery',
        year: '2025',
        image: '/assets/projects/finnodec.png',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        name: 'UseMaxify',
        description: 'My best work. Thoughtful UX, polished UI, cohesive experience.',
        url: 'https://usemaxify.com',
        phase: 'Current Best',
        year: '2025',
        image: '/assets/projects/maxify.png',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
];

const Journey = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const rect = container.getBoundingClientRect();
            const containerHeight = container.offsetHeight;
            const windowHeight = window.innerHeight;

            // Calculate progress based on how far the top of the container has scrolled past the top of the viewport
            // When rect.top is 0, we are at the start (progress 0)
            // When rect.bottom is windowHeight, we are at the end (progress 1)

            // Standard scroll progress calculation for sticky elements
            // We measure from when the element hits the top of the viewport to when it leaves
            const distanceScrolled = -rect.top;
            const scrollableDistance = containerHeight - windowHeight;

            // Ensure we don't divide by 0 or negative
            if (scrollableDistance <= 0) return;

            const rawProgress = distanceScrolled / scrollableDistance;
            const progress = Math.max(0, Math.min(1, rawProgress));

            setScrollProgress(progress);

            // Determine project index
            const index = Math.min(
                journeyProjects.length - 1,
                Math.floor(progress * journeyProjects.length)
            );

            setActiveIndex(index);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentProject = journeyProjects[activeIndex];
    const assetUrl = `${import.meta.env.BASE_URL}${currentProject.image.replace(/^\//, '')}`;

    return (
        <section id="journey" className="journey-section" ref={containerRef}>
            <div className="journey-sticky">
                <div className="container">
                    <h2 className="journey-title">The Journey</h2>

                    <div className="journey-display">
                        {/* Progress bar */}
                        <div className="journey-progress">
                            <div
                                className="journey-progress-fill"
                                style={{ height: `${scrollProgress * 100}%` }}
                            />
                            {journeyProjects.map((_, index) => (
                                <div
                                    key={index}
                                    className={`journey-dot ${index <= activeIndex ? 'active' : ''}`}
                                    style={{ top: `${(index / (journeyProjects.length - 1)) * 100}%` }}
                                />
                            ))}
                        </div>

                        {/* Main display card */}
                        <div className="journey-card">
                            <div className="journey-card-header">
                                <span className="journey-phase">{currentProject.phase}</span>
                            </div>

                            {/* Project Image */}
                            <div className="journey-image-container">
                                <img
                                    src={assetUrl}
                                    alt={currentProject.name}
                                    className="journey-image"
                                />
                            </div>

                            <div className="journey-card-footer">
                                <h3 className="journey-project-name">{currentProject.name}</h3>
                                <p className="journey-project-desc text-secondary">
                                    {currentProject.description}
                                </p>
                                <a
                                    href={currentProject.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="journey-link"
                                >
                                    Visit Site →
                                </a>
                            </div>
                        </div>

                        {/* Project counter */}
                        <div className="journey-counter">
                            <span className="counter-current">{String(activeIndex + 1).padStart(2, '0')}</span>
                            <span className="counter-divider">/</span>
                            <span className="counter-total">{String(journeyProjects.length).padStart(2, '0')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
