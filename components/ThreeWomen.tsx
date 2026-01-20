import React from 'react';

export const ThreeWomen: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-end', 
      gap: '1.5rem', 
      marginTop: '3rem', 
      marginBottom: '3rem',
      padding: '0 1rem'
    }}>
      {/* Левая женщина - красновато-коричневый топ */}
      <svg width="85" height="125" viewBox="0 0 85 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Тело */}
        <rect x="22" y="48" width="35" height="55" fill="#A0522D" rx="5" stroke="#000000" strokeWidth="2.5" />
        {/* Голова */}
        <circle cx="39.5" cy="32" r="16" fill="#F5DEB3" stroke="#000000" strokeWidth="2.5" />
        {/* Волосы - длинные волнистые */}
        <path d="M23 32 Q23 15 39.5 20 Q56 15 56 32 Q56 48 48 40 Q41 48 23 32" fill="#DEB887" stroke="#000000" strokeWidth="2" />
        {/* Черты лица */}
        <circle cx="33" cy="29" r="2" fill="#000000" />
        <circle cx="46" cy="29" r="2" fill="#000000" />
        <path d="M33 36 Q39.5 39 46 36" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>

      {/* Центральная женщина - желтый топ с рюкзаком, горы на футболке */}
      <svg width="95" height="135" viewBox="0 0 95 135" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Рюкзак сзади */}
        <rect x="28" y="52" width="32" height="38" fill="#FFD700" rx="4" stroke="#000000" strokeWidth="2.5" />
        {/* Тело - желтый топ */}
        <rect x="20" y="52" width="48" height="58" fill="#FFD700" rx="5" stroke="#000000" strokeWidth="2.5" />
        {/* Голова */}
        <circle cx="44" cy="30" r="17" fill="#F5DEB3" stroke="#000000" strokeWidth="2.5" />
        {/* Волосы - темные */}
        <ellipse cx="44" cy="25" rx="20" ry="14" fill="#1F1F1F" />
        {/* Черты лица */}
        <circle cx="37" cy="28" r="2.5" fill="#000000" />
        <circle cx="51" cy="28" r="2.5" fill="#000000" />
        <path d="M37 37 Q44 40 51 37" stroke="#000000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Горы на футболке - темные */}
        <path d="M28 58 L44 78 L60 58" stroke="#000000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M32 68 L44 83 L56 68" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M36 76 L44 88 L52 76" stroke="#000000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>

      {/* Правая женщина - красновато-коричневый топ */}
      <svg width="85" height="125" viewBox="0 0 85 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Тело */}
        <rect x="22" y="48" width="35" height="55" fill="#A0522D" rx="5" stroke="#000000" strokeWidth="2.5" />
        {/* Голова */}
        <circle cx="39.5" cy="32" r="16" fill="#F5DEB3" stroke="#000000" strokeWidth="2.5" />
        {/* Волосы - длинные волнистые */}
        <path d="M23 32 Q23 15 39.5 20 Q56 15 56 32 Q56 48 48 40 Q41 48 23 32" fill="#DEB887" stroke="#000000" strokeWidth="2" />
        {/* Черты лица */}
        <circle cx="33" cy="29" r="2" fill="#000000" />
        <circle cx="46" cy="29" r="2" fill="#000000" />
        <path d="M33 36 Q39.5 39 46 36" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};

