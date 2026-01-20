import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#F7F4EB',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      {/* Анимированные цветы */}
      <div style={{ position: 'relative', width: '120px', height: '120px', marginBottom: '2rem' }}>
        {/* Левая цветок */}
        <svg 
          viewBox="0 0 100 200" 
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%) scaleX(-1)',
            width: '40px',
            height: '60px',
            animation: 'pulse 1.5s ease-in-out infinite'
          }}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 200C50 150 20 120 20 80" stroke="#9E2A2B" strokeWidth="2"/>
          <circle cx="20" cy="80" r="15" fill="#9E2A2B" />
          <circle cx="20" cy="80" r="5" fill="#F7F4EB" />
        </svg>
        
        {/* Правая цветок */}
        <svg 
          viewBox="0 0 100 200" 
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '40px',
            height: '60px',
            animation: 'pulse 1.5s ease-in-out infinite 0.3s'
          }}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 200C50 150 80 120 80 80" stroke="#9E2A2B" strokeWidth="2"/>
          <circle cx="80" cy="80" r="15" fill="#1F2E4D" />
          <circle cx="80" cy="80" r="5" fill="#F7F4EB" />
        </svg>
        
        {/* Центральная матрёшка */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50px',
          height: '65px',
          animation: 'bounce 1s ease-in-out infinite'
        }}>
          <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <path d="M50 125C75 125 90 105 90 80C90 55 75 45 70 35C65 25 60 5 50 5C40 5 35 25 30 35C25 45 10 55 10 80C10 105 25 125 50 125Z" stroke="#1F2E4D" strokeWidth="3" fill="#F7F4EB"/>
            <path d="M50 45C60 45 65 35 65 25C65 15 58 10 50 10C42 10 35 15 35 25C35 35 40 45 50 45Z" fill="#9E2A2B" stroke="#1F2E4D" strokeWidth="2"/>
            <path d="M25 80C25 80 35 60 50 60C65 60 75 80 75 80V110C75 110 65 120 50 120C35 120 25 110 25 110V80Z" fill="#1F2E4D" stroke="#1F2E4D" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Текст */}
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1F2E4D',
          marginBottom: '0.5rem',
          letterSpacing: '0.02em'
        }}>
          Matreshki<span style={{ fontStyle: 'italic', fontSize: '1.5rem' }}>&</span>Co
        </h1>
        <p style={{
          fontFamily: 'Brush Script MT, cursive',
          fontSize: '1.25rem',
          color: 'rgba(31, 46, 77, 0.8)',
          marginBottom: '1rem',
          transform: 'rotate(-2deg)'
        }}>
          Matreshi
        </p>
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#9E2A2B',
            animation: 'dotPulse 1.4s ease-in-out infinite'
          }}></div>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#1F2E4D',
            animation: 'dotPulse 1.4s ease-in-out infinite 0.2s'
          }}></div>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#9E2A2B',
            animation: 'dotPulse 1.4s ease-in-out infinite 0.4s'
          }}></div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: translateY(-50%) scale(1); }
          50% { opacity: 0.6; transform: translateY(-50%) scale(0.95); }
        }
        @keyframes bounce {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};


