import React, { useState } from 'react';
import { Menu, X, Users, User, Heart, CheckCircle, MapPin, MessageCircle } from 'lucide-react';

interface BurgerMenuProps {
  onNavigate: (section: string) => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'about', label: 'О нас', icon: <Users size={18} /> },
    { id: 'author', label: 'Об авторе', icon: <User size={18} /> },
    { id: 'why-us', label: 'Почему мы', icon: <Heart size={18} /> },
    { id: 'who-suits', label: 'Кому подходит', icon: <CheckCircle size={18} /> },
    { id: 'tours', label: 'Наши туры', icon: <MapPin size={18} /> },
    { id: 'contact', label: 'Связаться', icon: <MessageCircle size={18} /> },
  ];

  const handleClick = (section: string) => {
    setIsOpen(false);
    onNavigate(section);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 bg-folk-red text-folk-cream p-3 rounded-full shadow-lg hover:bg-red-800 transition-all"
        style={{ 
          backgroundColor: '#B83D3F', 
          color: '#FFFFFF', 
          position: 'fixed', 
          top: '1.5rem', 
          right: '1.5rem', 
          zIndex: 50, 
          padding: '0.875rem', 
          borderRadius: '9999px',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
        }}
        aria-label="Меню"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              backgroundColor: 'rgba(0, 0, 0, 0.6)', 
              zIndex: 40,
              animation: 'fadeIn 0.2s ease-out'
            }}
          />
          
          {/* Menu Panel */}
          <div 
            className="fixed top-0 right-0 h-full bg-folk-cream z-50 shadow-2xl transform transition-transform overflow-y-auto"
            style={{ 
              backgroundColor: '#F7F4EB', 
              position: 'fixed', 
              top: 0, 
              right: 0, 
              height: '100%', 
              width: '280px', 
              maxWidth: '85vw',
              zIndex: 50,
              animation: 'slideIn 0.3s ease-out',
              boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Header with close button */}
            <div style={{ 
              padding: '1.5rem', 
              borderBottom: '2px solid rgba(31, 46, 77, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ 
                fontFamily: 'Georgia, serif',
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                color: '#1F2E4D',
                margin: 0
              }}>
                Меню
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(184, 61, 63, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                aria-label="Закрыть меню"
              >
                <X size={22} style={{ color: '#1F2E4D' }} />
              </button>
            </div>

            {/* Menu Items */}
            <div style={{ padding: '1.5rem 1rem' }}>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    style={{ 
                      color: '#1F2E4D', 
                      textAlign: 'left', 
                      padding: '1rem 1.25rem', 
                      fontWeight: '600', 
                      fontSize: '0.9375rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      transition: 'all 0.2s',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#B83D3F';
                      e.currentTarget.style.color = '#F7F4EB';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#1F2E4D';
                    }}
                  >
                    <span style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      transition: 'transform 0.2s'
                    }}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Animations */}
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideIn {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
          `}</style>
        </>
      )}
    </>
  );
};

