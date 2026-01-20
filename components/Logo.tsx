import React from 'react';

export const MatreshkaLogo: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => {
  return (
    <div className={`${className} relative flex items-center justify-center text-folk-blue`}>
      <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
        <path d="M50 125C75 125 90 105 90 80C90 55 75 45 70 35C65 25 60 5 50 5C40 5 35 25 30 35C25 45 10 55 10 80C10 105 25 125 50 125Z" stroke="currentColor" strokeWidth="3" fill="#F7F4EB"/>
        <path d="M50 45C60 45 65 35 65 25C65 15 58 10 50 10C42 10 35 15 35 25C35 35 40 45 50 45Z" fill="#9E2A2B" stroke="currentColor" strokeWidth="2"/>
        <path d="M25 80C25 80 35 60 50 60C65 60 75 80 75 80V110C75 110 65 120 50 120C35 120 25 110 25 110V80Z" fill="#1F2E4D" stroke="currentColor" strokeWidth="2"/>
        <path d="M35 110L50 90L65 110" stroke="#F7F4EB" strokeWidth="2"/>
      </svg>
    </div>
  );
};