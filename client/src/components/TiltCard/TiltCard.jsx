import './TiltCard.css';
import { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

/* -------------------------------------------------------------------------- */
// 참고
// Vanilla Tilt — https://www.npmjs.com/package/vanilla-tilt
// jQuery Tilt  — https://www.npmjs.com/package/tilt.js
// React Tilt   — https://www.npmjs.com/package/react-parallax-tilt
/* -------------------------------------------------------------------------- */

// Vanilla Tilt 옵션
const tiltOptions = {
  'max': 8,
  'speed': 10,
  'perspective': 1000,
  'scale': 1.01,
  'glare': true,
  'max-glare': 0.25,
};

export function TiltCard({ options, children }) {
  const cardRef = useRef(null); // { current }
  useEffect(() => {
    VanillaTilt.init(cardRef.current, { ...options, ...tiltOptions });
  }, [options]);

  const timeRef = useRef(0);
  useEffect(
    /* callback */
    () => {
      let clearIntervalId = setInterval(() => {
        timeRef.current += 1;
        console.log(timeRef.current);
      }, 1000);

      // cleanup
      return () => clearInterval(clearIntervalId);
    }, 
    /* dependencies */
    []
  );

  return (
    <div ref={cardRef} className="tiltCard">
      ({timeRef.current}) {children}
    </div>
  );
}

TiltCard.defaultProps = {
  options: tiltOptions,
};
