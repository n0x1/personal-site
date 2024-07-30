import React, { useEffect } from 'react';
import './Overlay.css';

const Overlay = () => {
    useEffect(() => {
        const overlay = document.querySelector('.overlay');
        const numberOfStars = 20;

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.rotate - `${Math.random() * 180}deg`
            star.style.animationDuration = `${Math.random() * 20 + 5}s`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            overlay.appendChild(star);
        }
    }, []);

    return <div className="overlay"></div>;
};

export default Overlay;
