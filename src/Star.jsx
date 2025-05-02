import React, { useRef, useEffect } from 'react';

function Star({ id, x, y, onDestroy }) {
    const starRef = useRef(null);
    
    useEffect(() => {
        if (starRef.current) {
            starRef.current.focus();
        }
    }, []);

    return (
    <div
    className="star"
    ref={starRef}
    tabIndex="0"
    onClick={() => onDestroy(id)}
    style={{
        left: x,
        top: y,
        position: 'absolute'
    }}
    >
      ⭐
    </div>
  );
}

export default Star;
