import React from 'react'
import { useInView } from "react-intersection-observer";

const Practice = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true
      });
    
      return (
        <div ref={ref}>
          <h2>{inView ? 'Element is visible' : 'Element is not visible'}</h2>
        </div>
      );
    }
export default Practice