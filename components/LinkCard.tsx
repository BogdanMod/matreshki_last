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
  
  const bgColor = item.highlight ? '#1F2E4D' : (isDark ? '#F7F4EB' : '#F7F4EB');
  const textColor = item.highlight ? '#F7F4EB' : '#1F2E4D';
  
  return (
    <a
      href={item.url}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`
        group relative flex items-center justify-between p-4 px-6 w-full
        rounded-full shadow-md
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:shadow-lg
        ${isDark 
          ? item.highlight 
            ? 'bg-folk-blue text-white border-2 border-folk-blue' 
            : 'bg-folk-cream text-folk-blue border-2 border-transparent hover:border-folk-cream'
          : item.highlight 
            ? 'bg-folk-blue text-white border-2 border-folk-blue' 
            : 'bg-folk-cream text-folk-blue border-2 border-transparent hover:border-folk-cream'}
      `}
      style={{ 
        backgroundColor: bgColor, 
        color: textColor,
        borderRadius: '9999px',
        padding: '1rem 1.5rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <div className="flex items-center gap-4">
        {item.icon && (
          <div className={`
            ${item.highlight ? 'text-folk-cream' : isDark ? 'text-folk-red' : 'text-folk-red'}
          `}>
            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
          </div>
        )}
        <div className="text-left">
          <h3 className="font-sans font-bold text-base leading-tight tracking-wide">
            {item.title}
          </h3>
          {item.subtitle && (
             <p className={`text-[10px] font-sans font-medium uppercase tracking-wider opacity-80 ${item.highlight ? 'text-white' : isDark ? 'text-folk-red' : 'text-folk-red'}`}>
               {item.subtitle}
             </p>
          )}
        </div>
      </div>
      
      <div className={`transition-transform duration-300 group-hover:translate-x-1 ${item.highlight ? 'text-white' : isDark ? 'text-folk-blue/50' : 'text-folk-blue/50'}`}>
        <ChevronRight size={18} />
      </div>
    </a>
  );
};