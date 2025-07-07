import React, { useEffect, useState } from 'react';
import './AnimatedPlaceholderInput.css';

const placeholderTexts = [
  "What's on your mind today?",
  "Got something to do?",
  "Add your next big idea!",
  "Don't forget your groceries!",
  "Plan your day like a pro.",
];
export const AnimatedPlaceholderInput = ({ value, onChange, onKeyDown }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % placeholderTexts.length);
        setFade(true);
      }, 300);
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholderTexts[index]}
      className={`animated-placeholder ${fade ? 'fade-in' : 'fade-out'}`}
    />
  );
};