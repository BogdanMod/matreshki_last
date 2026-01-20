import React from 'react';

export const LogoWithBerries: React.FC = () => {
  return (
    <svg 
      width="80" 
      height="80" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {/* Черные завитки */}
      <path 
        d="M20 30 Q30 20 40 30 T60 30 T80 30" 
        stroke="#000000" 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round"
      />
      <path 
        d="M25 40 Q35 50 45 40 T65 40" 
        stroke="#000000" 
        strokeWidth="1.5" 
        fill="none"
        strokeLinecap="round"
      />
      <path 
        d="M30 50 Q40 60 50 50 T70 50" 
        stroke="#000000" 
        strokeWidth="1.5" 
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Красные ягоды */}
      <circle cx="35" cy="45" r="6" fill="#9E2A2B" />
      <circle cx="50" cy="40" r="6" fill="#9E2A2B" />
      <circle cx="65" cy="45" r="6" fill="#9E2A2B" />
      <circle cx="42" cy="55" r="5" fill="#9E2A2B" />
      <circle cx="58" cy="55" r="5" fill="#9E2A2B" />
      
      {/* Зеленые листья */}
      <ellipse cx="32" cy="42" rx="4" ry="8" fill="#2D5016" transform="rotate(-30 32 42)" />
      <ellipse cx="48" cy="38" rx="4" ry="8" fill="#2D5016" transform="rotate(20 48 38)" />
      <ellipse cx="63" cy="42" rx="4" ry="8" fill="#2D5016" transform="rotate(-20 63 42)" />
      <ellipse cx="40" cy="52" rx="3" ry="7" fill="#2D5016" transform="rotate(40 40 52)" />
      <ellipse cx="56" cy="52" rx="3" ry="7" fill="#2D5016" transform="rotate(-40 56 52)" />
    </svg>
  );
};

