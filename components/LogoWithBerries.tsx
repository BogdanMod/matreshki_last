import React from 'react';

export const LogoWithBerries: React.FC = () => {
  return (
    <svg 
      width="90" 
      height="90" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {/* Черные завитки - более извилистые */}
      <path 
        d="M15 25 Q20 15 25 20 Q30 25 35 20 Q40 15 45 20 Q50 25 55 20 Q60 15 65 20 Q70 25 75 20 Q80 15 85 20" 
        stroke="#000000" 
        strokeWidth="2.5" 
        fill="none"
        strokeLinecap="round"
      />
      <path 
        d="M20 35 Q25 45 30 40 Q35 35 40 40 Q45 45 50 40 Q55 35 60 40 Q65 45 70 40" 
        stroke="#000000" 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round"
      />
      <path 
        d="M25 50 Q30 60 35 55 Q40 50 45 55 Q50 60 55 55 Q60 50 65 55 Q70 60 75 55" 
        stroke="#000000" 
        strokeWidth="1.5" 
        fill="none"
        strokeLinecap="round"
      />
      <path 
        d="M30 65 Q35 75 40 70 Q45 65 50 70 Q55 75 60 70" 
        stroke="#000000" 
        strokeWidth="1.5" 
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Красные ягоды - кластер */}
      <circle cx="35" cy="50" r="7" fill="#9E2A2B" stroke="#000000" strokeWidth="1" />
      <circle cx="50" cy="45" r="7" fill="#9E2A2B" stroke="#000000" strokeWidth="1" />
      <circle cx="65" cy="50" r="7" fill="#9E2A2B" stroke="#000000" strokeWidth="1" />
      <circle cx="42" cy="60" r="6" fill="#9E2A2B" stroke="#000000" strokeWidth="1" />
      <circle cx="58" cy="60" r="6" fill="#9E2A2B" stroke="#000000" strokeWidth="1" />
      <circle cx="35" cy="65" r="5" fill="#9E2A2B" stroke="#000000" strokeWidth="0.5" />
      <circle cx="48" cy="68" r="5" fill="#9E2A2B" stroke="#000000" strokeWidth="0.5" />
      <circle cx="62" cy="65" r="5" fill="#9E2A2B" stroke="#000000" strokeWidth="0.5" />
      
      {/* Зеленые листья - больше и реалистичнее */}
      <ellipse cx="30" cy="48" rx="5" ry="10" fill="#2D5016" transform="rotate(-25 30 48)" />
      <ellipse cx="47" cy="43" rx="5" ry="10" fill="#2D5016" transform="rotate(25 47 43)" />
      <ellipse cx="62" cy="48" rx="5" ry="10" fill="#2D5016" transform="rotate(-25 62 48)" />
      <ellipse cx="38" cy="58" rx="4" ry="9" fill="#2D5016" transform="rotate(45 38 58)" />
      <ellipse cx="54" cy="58" rx="4" ry="9" fill="#2D5016" transform="rotate(-45 54 58)" />
      <ellipse cx="31" cy="63" rx="3" ry="8" fill="#2D5016" transform="rotate(30 31 63)" />
      <ellipse cx="46" cy="66" rx="3" ry="8" fill="#2D5016" transform="rotate(-30 46 66)" />
      <ellipse cx="60" cy="63" rx="3" ry="8" fill="#2D5016" transform="rotate(30 60 63)" />
      
      {/* Дополнительные маленькие листья */}
      <ellipse cx="28" cy="55" rx="2" ry="6" fill="#3D6016" transform="rotate(60 28 55)" />
      <ellipse cx="52" cy="54" rx="2" ry="6" fill="#3D6016" transform="rotate(-60 52 54)" />
      <ellipse cx="68" cy="55" rx="2" ry="6" fill="#3D6016" transform="rotate(60 68 55)" />
    </svg>
  );
};

