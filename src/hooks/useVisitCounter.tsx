
import { useState, useEffect } from 'react';

// Key for storing the visit count in localStorage
const VISIT_COUNT_KEY = 'portfolio_visit_count';
// Key for storing the last visit timestamp in localStorage
const LAST_VISIT_KEY = 'portfolio_last_visit';

export const useVisitCounter = () => {
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    // Function to increment the visit counter
    const incrementVisitCount = () => {
      try {
        // Get current count from localStorage or initialize to 0
        const currentCount = parseInt(localStorage.getItem(VISIT_COUNT_KEY) || '0');
        const lastVisitTime = localStorage.getItem(LAST_VISIT_KEY);
        const currentTime = new Date().getTime();
        
        console.log('Current visit count:', currentCount);
        
        // Only count as a new visit if:
        // 1. There's no record of a last visit, or
        // 2. The last visit was more than 1 hour ago (to avoid counting refreshes as new visits)
        if (!lastVisitTime || (currentTime - parseInt(lastVisitTime)) > 3600000) {
          const newCount = currentCount + 1;
          localStorage.setItem(VISIT_COUNT_KEY, newCount.toString());
          localStorage.setItem(LAST_VISIT_KEY, currentTime.toString());
          setVisitCount(newCount);
          console.log('New visit count:', newCount);
        } else {
          // If it's not a new visit, just use the current count
          setVisitCount(currentCount);
        }
      } catch (error) {
        console.error('Error updating visit count:', error);
        // Default to 1 if there's an error
        setVisitCount(1);
      }
    };

    // Call the function on component mount
    incrementVisitCount();
  }, []);

  return { visitCount };
};
