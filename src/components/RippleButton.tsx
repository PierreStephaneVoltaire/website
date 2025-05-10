import React, { useState, useEffect } from 'react';

interface RippleButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}

const RippleButton: React.FC<RippleButtonProps> = ({ 
  children, 
  className = '', 
  href, 
  target,
  onClick 
}) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; size: number; id: number }[]>([]);
  const [nextId, setNextId] = useState(0);

  // Clean up ripples after animation completes
  useEffect(() => {
    const timeouts: number[] = [];
    
    ripples.forEach(ripple => {
      const timeout = window.setTimeout(() => {
        setRipples(prevRipples => prevRipples.filter(r => r.id !== ripple.id));
      }, 800); // Match animation duration
      
      timeouts.push(timeout);
    });
    
    return () => {
      timeouts.forEach(timeout => window.clearTimeout(timeout));
    };
  }, [ripples]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    
    // Get click position relative to button
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Calculate ripple size (should be large enough to cover button)
    const size = Math.max(rect.width, rect.height) * 2;
    
    // Add new ripple
    setRipples([...ripples, { x, y, size, id: nextId }]);
    setNextId(nextId + 1);
    
    // Call onClick handler if provided
    if (onClick) onClick();
  };

  const buttonStyle = `relative overflow-hidden ${className}`;
  
  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        className={buttonStyle}
        onClick={handleClick}
      >
        {children}
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-white bg-opacity-30 animate-ripple"
            style={{
              top: ripple.y - ripple.size / 2,
              left: ripple.x - ripple.size / 2,
              width: ripple.size,
              height: ripple.size
            }}
          />
        ))}
      </a>
    );
  }
  
  return (
    <button 
      className={buttonStyle}
      onClick={handleClick}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white bg-opacity-30 animate-ripple"
          style={{
            top: ripple.y - ripple.size / 2,
            left: ripple.x - ripple.size / 2,
            width: ripple.size,
            height: ripple.size
          }}
        />
      ))}
    </button>
  );
};

export default RippleButton;
