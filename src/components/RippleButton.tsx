import React, { useState, useEffect } from 'react';

interface RippleButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

const RippleButton: React.FC<RippleButtonProps> = ({ 
  children, 
  className = '', 
  href, 
  target,
  onClick,
  ariaLabel
}) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; size: number; id: number }[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const timeouts: number[] = [];
    
    ripples.forEach(ripple => {
      const timeout = window.setTimeout(() => {
        setRipples(prevRipples => prevRipples.filter(r => r.id !== ripple.id));
      }, 800);
      
      timeouts.push(timeout);
    });
    
    return () => {
      timeouts.forEach(timeout => window.clearTimeout(timeout));
    };
  }, [ripples]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;
    
    setRipples([...ripples, { x, y, size, id: nextId }]);
    setNextId(nextId + 1);
    
    if (onClick) onClick();
  };

  const baseClasses = `relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all ${className}`;
  
  if (href) {
    const isExternal = target === '_blank';
    const accessibleLabel = isExternal && !ariaLabel ? `${children} (opens in new window)` : ariaLabel;
    
    return (
      <a 
        href={href} 
        target={target} 
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={baseClasses}
        onClick={handleClick}
        aria-label={accessibleLabel}
      >
        {children}
        {isExternal && <span className="sr-only"> (opens in new window)</span>}
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="ripple-effect"
            style={{
              position: 'absolute',
              top: ripple.y - ripple.size / 2,
              left: ripple.x - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              transform: 'scale(0)',
              animation: 'ripple 0.8s linear forwards',
              pointerEvents: 'none'
            }}
          />
        ))}
      </a>
    );
  }
  
  return (
    <button 
      className={baseClasses}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple-effect"
          style={{
            position: 'absolute',
            top: ripple.y - ripple.size / 2,
            left: ripple.x - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            transform: 'scale(0)',
            animation: 'ripple 0.8s linear forwards',
            pointerEvents: 'none'
          }}
        />
      ))}
    </button>
  );
};

export default RippleButton;