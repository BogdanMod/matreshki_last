import React from 'react';
import { ChevronRight } from 'lucide-react';
import { LinkItem } from '../types';

interface LinkCardProps {
  item: LinkItem;
  variant?: 'light' | 'dark';
}

export const LinkCard: React.FC<LinkCardProps> = ({ item, variant = 'light' }) => {
  const isExternal = item.url.startsWith('http') || item.url.startsWith('https');
  const isDark = variant === 'dark';

  const bgColor = item.highlight ? '#B83D3F' : '#FFFFFF';
  const textColor = item.highlight ? '#FFFFFF' : '#1F2E4D';
  const borderColor = item.highlight ? '#8F2F31' : 'rgba(31, 46, 77, 0.08)';
  const shadow = item.highlight
    ? '0 10px 22px rgba(184, 61, 63, 0.25)'
    : '0 8px 18px rgba(31, 46, 77, 0.08)';
  
  return (
    <a
      href={item.url}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`
        group relative flex items-center justify-between p-4 px-6 w-full
        rounded-full shadow-md
        transition-all duration-300 ease-out
        hover:scale-[1.01] hover:shadow-lg
        ${isDark ? '' : ''}
      `}
      style={{ 
        backgroundColor: bgColor, 
        color: textColor,
        borderRadius: '9999px',
        padding: '1rem 1.5rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: `1px solid ${borderColor}`,
        boxShadow: shadow,
      }}
    >
      <div className="flex items-center gap-4">
        {item.icon && (
          <div style={{ color: item.highlight ? '#FFFFFF' : '#B83D3F' }}>
            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
          </div>
        )}
        <div className="text-left">
          <h3 className="font-sans font-bold text-base leading-tight tracking-wide">
            {item.title}
          </h3>
          {item.subtitle && (
             <p
               className="text-[10px] font-sans font-medium uppercase tracking-wider opacity-80"
               style={{ color: item.highlight ? '#FFFFFF' : '#B83D3F' }}
             >
               {item.subtitle}
             </p>
          )}
        </div>
      </div>
      
      <div
        className="transition-transform duration-300 group-hover:translate-x-1"
        style={{ color: item.highlight ? '#FFFFFF' : 'rgba(31, 46, 77, 0.5)' }}
      >
        <ChevronRight size={18} />
      </div>
    </a>
  );
};