import React from 'react';
import { Smartphone } from 'lucide-react';

export const DesktopMessage: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-folk-cream z-[100] flex items-center justify-center p-6">
      <div className="max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <div className="bg-folk-red text-folk-cream p-6 rounded-full">
            <Smartphone size={64} />
          </div>
        </div>
        <h1 className="font-serif text-4xl text-folk-blue mb-4">
          Matreshki<span className="font-serif italic font-normal text-3xl align-middle ml-1">&</span>Co
        </h1>
        <p className="font-script text-2xl text-folk-blue/90 mb-6 transform -rotate-1">
          Matreshi
        </p>
        <div className="bg-folk-red text-folk-cream p-6 rounded-2xl shadow-lg">
          <p className="text-lg font-bold mb-2">Откройте на телефоне</p>
          <p className="text-sm opacity-90">
            Этот таплинк создан специально для мобильных устройств. 
            Пожалуйста, откройте эту страницу на вашем смартфоне для лучшего опыта.
          </p>
        </div>
        <p className="mt-6 text-folk-blue/60 text-xs">
          Women's Travel Company
        </p>
      </div>
    </div>
  );
};



