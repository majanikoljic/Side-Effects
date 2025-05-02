import React, { useState, useEffect, useRef } from 'react';
import Star from './Star';

function Space(){
    const [stars, setStars] = useState([]);
    const idCounter = useRef(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const x = Math.random() * (window.innerWidth - 50); // 50 = size of star
            const y = Math.random() * (window.innerHeight - 50);
          
            const newStar = {
                id: idCounter.current++,
                x,
                y
            };
    
            setStars(prevStars => [...prevStars, newStar]);
        }, 2500);
    
        return () => clearInterval(intervalRef.current);
    }, []);

    function destroyStar(id) {
        setStars(prevStars => prevStars.filter(star => star.id !== id));
    }
    
    return (
        <div className="space">
            {stars.map(star => (
            <Star
            key={star.id}
            id={star.id}
            x={star.x}
            y={star.y}
            onDestroy={destroyStar}
            />
          ))}
        </div>
    );
}

export default Space;