import React from 'react';

export const ThreeWomen: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '1rem', marginTop: '2rem', marginBottom: '2rem' }}>
      {/* Левая женщина */}
      <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Тело */}
        <rect x="25" y="50" width="30" height="50" fill="#8B4513" rx="4" stroke="#1F1F1F" strokeWidth="2" />
        {/* Голова */}
        <circle cx="40" cy="35" r="15" fill="#F5DEB3" stroke="#1F1F1F" strokeWidth="2" />
        {/* Волосы */}
        <path d="M25 35 Q25 20 40 25 Q55 20 55 35 Q55 45 45 40 Q35 45 25 35" fill="#D4A574" stroke="#1F1F1F" strokeWidth="1.5" />
        {/* Черты лица */}
        <circle cx="35" cy="32" r="1.5" fill="#1F1F1F" />
        <circle cx="45" cy="32" r="1.5" fill="#1F1F1F" />
        <path d="M35 38 Q40 41 45 38" stroke="#1F1F1F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>

      {/* Центральная женщина */}
      <svg width="90" height="130" viewBox="0 0 90 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Рюкзак */}
        <rect x="30" y="55" width="30" height="35" fill="#FFD700" rx="3" stroke="#1F1F1F" strokeWidth="2" />
        {/* Тело */}
        <rect x="25" y="55" width="40" height="55" fill="#FFD700" rx="4" stroke="#1F1F1F" strokeWidth="2" />
        {/* Голова */}
        <circle cx="45" cy="35" r="16" fill="#F5DEB3" stroke="#1F1F1F" strokeWidth="2" />
        {/* Волосы */}
        <ellipse cx="45" cy="30" rx="18" ry="12" fill="#1F1F1F" />
        {/* Черты лица */}
        <circle cx="39" cy="32" r="2" fill="#1F1F1F" />
        <circle cx="51" cy="32" r="2" fill="#1F1F1F" />
        <path d="M39 40 Q45 43 51 40" stroke="#1F1F1F" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Горы на футболке */}
        <path d="M30 60 L45 75 L60 60" stroke="#1F1F1F" strokeWidth="1.5" fill="none" />
        <path d="M35 70 L45 80 L55 70" stroke="#1F1F1F" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Правая женщина */}
      <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Тело */}
        <rect x="25" y="50" width="30" height="50" fill="#8B4513" rx="4" stroke="#1F1F1F" strokeWidth="2" />
        {/* Голова */}
        <circle cx="40" cy="35" r="15" fill="#F5DEB3" stroke="#1F1F1F" strokeWidth="2" />
        {/* Волосы */}
        <path d="M25 35 Q25 20 40 25 Q55 20 55 35 Q55 45 45 40 Q35 45 25 35" fill="#D4A574" stroke="#1F1F1F" strokeWidth="1.5" />
        {/* Черты лица */}
        <circle cx="35" cy="32" r="1.5" fill="#1F1F1F" />
        <circle cx="45" cy="32" r="1.5" fill="#1F1F1F" />
        <path d="M35 38 Q40 41 45 38" stroke="#1F1F1F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};

