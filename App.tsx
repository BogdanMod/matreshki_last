import React, { useRef, useEffect, useState } from 'react';
import { 
  Instagram, 
  Send, 
  Plane, 
  Flame, 
  MessageCircle, 
  MapPin,
  Heart,
  Users,
  Star,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { LinkCard } from './components/LinkCard';
import { BurgerMenu } from './components/BurgerMenu';
import { DesktopMessage } from './components/DesktopMessage';
import { Loader } from './components/Loader';
import { LogoWithBerries } from './components/LogoWithBerries';
import { LinkItem } from './types';

const homeTours = [
  {
    id: '1',
    title: 'АРХЫЗ',
    dates: '16-19 февраля',
    subtitle: 'женский тур',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800',
    url: '#tours'
  },
  {
    id: '2',
    title: 'Активный отдых',
    dates: '',
    subtitle: '',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800',
    url: '#tours'
  },
  {
    id: '3',
    title: 'Зимние приключения',
    dates: '',
    subtitle: '',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=800',
    url: '#tours'
  },
];

const tours: LinkItem[] = [
  {
    id: '1',
    title: 'Тур по Золотому кольцу',
    subtitle: 'Классика России',
    url: '#',
    icon: <MapPin />,
    highlight: true
  },
  {
    id: '2',
    title: 'Путешествие в Карелию',
    subtitle: 'Северная природа',
    url: '#',
    icon: <Plane />
  },
  {
    id: '3',
    title: 'Крымские каникулы',
    subtitle: 'Море и горы',
    url: '#',
    icon: <Flame />
  },
];

const galleryPhotos = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&q=80&w=800',
];

const palette = {
  red: '#B83D3F',
  redDark: '#8F2F31',
  lemon: '#FFF4B0',
  cream: '#FFFDF7',
  white: '#FFFFFF',
  blue: '#1F2E4D',
  blueSoft: '#2E4066',
};

function App() {
  console.log('[APP] App component rendering...');
  
  // Определяем мобильное устройство сразу при инициализации
  const userAgent = typeof navigator !== 'undefined' ? (navigator.userAgent || navigator.vendor || (window as any).opera || '') : '';
  const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth <= 768;
  const initialMobile = isMobileDevice || isSmallScreen;
  
  console.log('[APP] User agent:', userAgent);
  console.log('[APP] Is mobile device:', isMobileDevice);
  console.log('[APP] Is small screen:', isSmallScreen);
  console.log('[APP] Initial mobile:', initialMobile);
  
  const [isMobile] = useState<boolean>(initialMobile);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Перехватываем ошибки
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Error caught:', event.error);
      setError(event.error?.message || 'Произошла ошибка');
    };
    
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled rejection:', event.reason);
      setError(event.reason?.message || 'Ошибка загрузки');
    };
    
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);
  
  useEffect(() => {
    console.log('[APP] useEffect triggered, isLoading:', isLoading);
    // Минимальная задержка для показа лоадера
    const timer = setTimeout(() => {
      console.log('[APP] Setting isLoading to false');
      setIsLoading(false);
    }, 300);
    
    return () => {
      console.log('[APP] Cleaning up timer');
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutRef = useRef<HTMLDivElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  const whoSuitsRef = useRef<HTMLDivElement>(null);
  const toursRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      'about': aboutRef,
      'author': authorRef,
      'why-us': whyUsRef,
      'who-suits': whoSuitsRef,
      'tours': toursRef,
      'contact': contactRef,
    };

    const ref = refs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const SectionDivider = () => (
    <div style={{ marginTop: '3rem', marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}>
      <div className="folk-rug-divider" />
    </div>
  );

  const SectionHeading = ({
    title,
    color = palette.blue,
    accentColor = palette.red,
  }: {
    title: string;
    color?: string;
    accentColor?: string;
  }) => (
    <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.75rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          margin: 0,
          color,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          marginTop: '0.9rem',
        }}
      >
        <span style={{ width: '18px', height: '2px', backgroundColor: accentColor }} />
        <span style={{ width: '6px', height: '6px', backgroundColor: accentColor, borderRadius: '999px' }} />
        <span style={{ width: '18px', height: '2px', backgroundColor: accentColor }} />
      </div>
    </div>
  );

  const contentCardStyle = {
    backgroundColor: palette.white,
    borderRadius: '22px',
    padding: '1.5rem',
    boxShadow: '0 14px 28px rgba(31, 46, 77, 0.08)',
    border: '1px solid rgba(184, 61, 63, 0.08)',
  } as const;

  const SectionLead = ({ text, color = palette.blueSoft }: { text: string; color?: string }) => (
    <p
      style={{
        textAlign: 'center',
        fontSize: '1rem',
        lineHeight: '1.8',
        color,
        margin: 0,
        marginBottom: '2rem',
      }}
    >
      {text}
    </p>
  );

  const flowerSpots = [
    { top: '6px', left: '4%', size: 46 },
    { top: '8px', right: '4%', size: 46 },
    { top: '12px', left: '22%', size: 34 },
    { top: '12px', right: '22%', size: 34 },
    { top: '28px', left: '10%', size: 40 },
    { top: '30px', right: '10%', size: 40 },
    { top: '38px', left: '38%', size: 44 },
    { top: '40px', right: '38%', size: 44 },
    { top: '52px', left: '50%', size: 52, transform: 'translateX(-50%)' },
    { top: '62px', left: '18%', size: 36 },
    { top: '64px', right: '18%', size: 36 },
    { top: '78px', left: '30%', size: 34 },
    { top: '78px', right: '30%', size: 34 },
    { top: '96px', left: '8%', size: 32 },
    { top: '96px', right: '8%', size: 32 },
  ];

  const FolkFlowerSmall = ({ style }: { style: React.CSSProperties }) => (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', ...style }}
    >
      {/* Outer petals */}
      <circle cx="60" cy="12" r="18" fill={palette.red} />
      <circle cx="60" cy="108" r="18" fill={palette.red} />
      <circle cx="12" cy="60" r="18" fill={palette.red} />
      <circle cx="108" cy="60" r="18" fill={palette.red} />
      <circle cx="26" cy="26" r="16" fill={palette.red} />
      <circle cx="94" cy="26" r="16" fill={palette.red} />
      <circle cx="26" cy="94" r="16" fill={palette.red} />
      <circle cx="94" cy="94" r="16" fill={palette.red} />

      {/* Inner petals */}
      <circle cx="60" cy="26" r="12" fill={palette.redDark} />
      <circle cx="60" cy="94" r="12" fill={palette.redDark} />
      <circle cx="26" cy="60" r="12" fill={palette.redDark} />
      <circle cx="94" cy="60" r="12" fill={palette.redDark} />

      {/* Flower center */}
      <circle cx="60" cy="60" r="14" fill={palette.lemon} />
      <circle cx="60" cy="60" r="6" fill={palette.blue} />
  </svg>
);

  console.log('[APP] Render check - error:', error, 'isLoading:', isLoading, 'isMobile:', isMobile);
  
  // Показываем ошибку, если она есть
  if (error) {
    console.log('[APP] Rendering error screen');
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        background: '#FFFFFF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{ color: '#000', fontSize: '1.5rem', marginBottom: '1rem' }}>Ошибка</h1>
        <p style={{ color: '#FFFACD', marginBottom: '1rem', fontSize: '0.9rem', wordBreak: 'break-word' }}>{error}</p>
        <button
          onClick={() => {
            setError(null);
            window.location.reload();
          }}
          style={{
            padding: '0.75rem 1.5rem',
            background: '#FFFACD',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Перезагрузить
        </button>
      </div>
    );
  }

  // Show loader только во время загрузки
  if (isLoading) {
    console.log('[APP] Rendering loader');
    return <Loader />;
  }

  // Show desktop message if not mobile
  if (!isMobile) {
    console.log('[APP] Rendering desktop message');
    return <DesktopMessage />;
  }

  console.log('[APP] Rendering main content');

  return (
    <div
      className="min-h-screen font-sans relative"
      style={{ backgroundColor: palette.cream, color: palette.blue, width: '100%', minHeight: '100vh' }}
    >
      <BurgerMenu onNavigate={scrollToSection} />
      <button
        type="button"
        aria-label="Наверх"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          right: '1rem',
          bottom: '1.25rem',
          width: '42px',
          height: '42px',
          borderRadius: '999px',
          border: `1px solid ${palette.redDark}`,
          backgroundColor: palette.red,
          color: palette.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 20px rgba(184, 61, 63, 0.35)',
          cursor: 'pointer',
          opacity: showBackToTop ? 1 : 0,
          transform: showBackToTop ? 'translateY(0)' : 'translateY(12px)',
          pointerEvents: showBackToTop ? 'auto' : 'none',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          zIndex: 1001,
        }}
      >
        ↑
      </button>
      
      {/* Hero Section */}
      <div
        style={{
          maxWidth: '100%',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          paddingTop: '0',
          paddingBottom: '3rem',
          background: `linear-gradient(180deg, ${palette.lemon} 0%, ${palette.cream} 70%)`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid rgba(184, 61, 63, 0.12)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '150px',
            backgroundColor: palette.lemon,
            borderBottomLeftRadius: '32px',
            borderBottomRightRadius: '32px',
            boxShadow: 'inset 0 -12px 18px rgba(184, 61, 63, 0.08)',
            marginBottom: '1.75rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {flowerSpots.map((spot, index) => (
            <FolkFlowerSmall
              key={`${spot.top}-${spot.left ?? spot.right}-${index}`}
              style={{
                top: spot.top,
                left: spot.left,
                right: spot.right,
                width: `${spot.size}px`,
                height: `${spot.size}px`,
                transform: spot.transform,
                opacity: 0.95,
              }}
            />
          ))}
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: '48px',
              background: 'linear-gradient(180deg, rgba(255, 244, 176, 0) 0%, rgba(255, 244, 176, 0.9) 70%)',
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: palette.red,
            color: palette.white,
            padding: '0.4rem 0.9rem',
            borderRadius: '999px',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            boxShadow: '0 6px 14px rgba(184, 61, 63, 0.35)',
          }}
        >
          Женские путешествия
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <div style={{ transform: 'scale(0.92)' }}>
            <LogoWithBerries />
           </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h1
              style={{
                fontFamily: 'var(--font-brand)',
                fontSize: '2.2rem',
                fontWeight: 400,
                color: palette.blue,
                margin: 0,
                lineHeight: '1.1',
                letterSpacing: '0.01em',
                textAlign: 'center',
                marginLeft: '-6px',
              }}
            >
              Matreshki&Co
            </h1>
            <p
              style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
                color: palette.red,
                margin: 0,
                marginTop: '0.25rem',
              }}
            >
              Matreshki
            </p>
            <p
              style={{
              fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: palette.blueSoft,
                margin: 0,
                marginTop: '0.35rem',
                textTransform: 'uppercase',
              }}
            >
              Women's travel company
            </p>
           </div>
        </div>

        <p
          style={{
            textAlign: 'center',
            fontSize: '1rem',
            lineHeight: '1.75',
            color: palette.blueSoft,
            maxWidth: '26rem',
          }}
        >
          Авторские поездки для женщин по России и соседним странам. Тёплая атмосфера, ремёсла,
          традиции и маршруты, где всё продумано за вас.
        </p>

        <button
          onClick={() => scrollToSection('contact')}
          style={{
            marginTop: '1.5rem',
            backgroundColor: palette.red,
            color: palette.white,
            padding: '0.9rem 2rem',
            borderRadius: '999px',
            border: `1px solid ${palette.redDark}`,
            boxShadow: '0 10px 20px rgba(184, 61, 63, 0.3)',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Записаться в тур
        </button>

        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            marginTop: '1.2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {['Камерные группы', 'Русские традиции', 'Безопасный комфорт'].map((label) => (
            <span
              key={label}
              style={{
                padding: '0.45rem 0.85rem',
                borderRadius: '999px',
                backgroundColor: palette.white,
                border: '1px solid rgba(184, 61, 63, 0.15)',
                color: palette.blue,
                fontSize: '0.75rem',
                fontWeight: 600,
              }}
            >
              {label}
            </span>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginTop: '2.2rem',
            paddingBottom: '1.5rem',
            width: '100%',
            maxWidth: '28rem',
          }}
        >
          {homeTours.map((tour, index) => (
            <a
              key={tour.id}
              href={tour.url}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('tours');
              }}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                width: '100%',
                aspectRatio: index === 0 ? '16/9' : '16/10',
                boxShadow: '0 10px 24px rgba(31, 46, 77, 0.18)',
                textDecoration: 'none',
                display: 'block',
                backgroundColor: '#f0f0f0',
              }}
            >
              <img
                src={tour.image}
                alt={tour.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=' + tour.title;
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '0.85rem 1rem',
                  background: 'linear-gradient(180deg, rgba(31, 46, 77, 0) 0%, rgba(31, 46, 77, 0.75) 65%)',
                  color: palette.white,
                }}
              >
                <div style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.02em' }}>
                  {tour.title}
                </div>
                {tour.dates && (
                  <div style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '0.2rem' }}>{tour.dates}</div>
                )}
                {tour.subtitle && (
                  <div style={{ fontSize: '0.75rem', opacity: 0.85, marginTop: '0.15rem' }}>{tour.subtitle}</div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* О нас */}
      <section
        ref={aboutRef}
        id="about"
        className="bg-folk-red px-6"
        style={{ backgroundColor: palette.red, paddingTop: '4.2rem', paddingBottom: '4.2rem' }}
      >
        <div className="max-w-md mx-auto" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <SectionHeading title="О НАС" color={palette.cream} accentColor={palette.cream} />
          <SectionLead
            text="Русская эстетика, внимательный сервис и путешествия, которые хочется пересказывать."
            color={palette.cream}
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '0.9rem',
              marginBottom: '1.8rem',
            }}
          >
            {[
              { icon: <MapPin size={18} />, label: 'Маршруты по России' },
              { icon: <Heart size={18} />, label: 'Тёплая атмосфера' },
              { icon: <Star size={18} />, label: 'Проверенные гиды' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: palette.white,
                  borderRadius: '16px',
                  padding: '0.9rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.7rem',
                  boxShadow: '0 10px 22px rgba(31, 46, 77, 0.06)',
                  border: '1px solid rgba(184, 61, 63, 0.08)',
                  color: palette.blue,
                  fontWeight: 600,
                }}
              >
                <span style={{ color: palette.red }}>{item.icon}</span>
                <span style={{ fontSize: '0.95rem' }}>{item.label}</span>
              </div>
            ))}
          </div>
          <div style={contentCardStyle}>
            <div className="space-y-6 text-base leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.75', color: palette.blueSoft }}>
              <p>
                Matreshki&Co — женское турагентство с русским характером. Мы создаём путешествия,
                где сочетаются красота природы, культурные открытия и искренняя дружба.
              </p>
              <p>
                Наша миссия — показать вам Россию и близкие страны через традиции, ремёсла,
                гастрономию и историю. Каждая поездка — как тёплая история, которая остаётся с вами.
              </p>
              <p>
                Мы заботимся о комфорте и безопасности: продуманные маршруты, проверенные партнёры,
                сопровождающий гид и мягкий ритм путешествия.
              </p>
              <p>
                Присоединяйтесь к сообществу путешественниц, где ценят традиции, поддержку
                и чувство «своих».
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Об авторе */}
      <section
        ref={authorRef}
        id="author"
        className="bg-folk-cream px-6"
        style={{ backgroundColor: palette.white, paddingTop: '4.2rem', paddingBottom: '4.2rem' }}
      >
        <div className="max-w-md mx-auto" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <SectionHeading title="Об авторе" />
          <SectionLead text="Личное сопровождение, тёплая атмосфера и опыт, проверенный годами." />
          <div
            style={{
              backgroundColor: palette.cream,
              borderRadius: '26px',
              padding: '1.6rem',
              border: '1px solid rgba(184, 61, 63, 0.12)',
              boxShadow: '0 16px 32px rgba(31, 46, 77, 0.12)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.8rem' }}>
              <div
                style={{
                  padding: '0.4rem 0.95rem',
                  borderRadius: '999px',
                  backgroundColor: palette.red,
                  color: palette.white,
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                Автор и гид
              </div>
              <div style={{ position: 'relative', width: '9.5rem', height: '9.5rem' }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '999px',
                    border: `2px dashed ${palette.red}`,
                    opacity: 0.4,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    borderRadius: '999px',
                    overflow: 'hidden',
                    border: `4px solid ${palette.red}`,
                    boxShadow: '0 12px 26px rgba(184, 61, 63, 0.25)',
                    backgroundColor: palette.white,
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
                    alt="Александрия"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
              <h3 style={{ margin: 0, fontSize: '2rem', color: palette.blue, fontFamily: 'Georgia, "Times New Roman", serif' }}>
                Александрия
              </h3>
              <p style={{ margin: 0, color: palette.blueSoft, fontSize: '0.9rem' }}>
                Основательница и куратор авторских маршрутов
               </p>
             </div>

            <div style={{ display: 'grid', gap: '0.7rem', marginTop: '1.4rem' }}>
              {[
                { icon: <Star size={18} />, text: '10+ лет опыта в авторских турах' },
                { icon: <Heart size={18} />, text: 'Мягкий ритм, забота и безопасная логистика' },
                { icon: <MapPin size={18} />, text: 'Маршруты с русскими традициями и ремёслами' },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{
                    backgroundColor: palette.white,
                    borderRadius: '16px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.7rem',
                    border: '1px solid rgba(184, 61, 63, 0.12)',
                    color: palette.blue,
                    fontWeight: 600,
                    fontSize: '0.92rem',
                  }}
                >
                  <span style={{ color: palette.red }}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '1.3rem',
                backgroundColor: palette.white,
                borderRadius: '18px',
                padding: '1.2rem',
                border: '1px solid rgba(184, 61, 63, 0.08)',
                color: palette.blueSoft,
                lineHeight: '1.7',
                fontSize: '0.98rem',
              }}
            >
              <p style={{ margin: 0, marginBottom: '0.8rem' }}>
                В моих турах важна атмосфера: мы путешествуем красиво, спокойно и по‑настоящему.
                Всё организовано так, чтобы вы могли наслаждаться маршрутом и собой.
              </p>
              <p style={{ margin: 0 }}>
                Я лично курирую каждую поездку и остаюсь рядом — от первого сообщения до последнего дня тура.
             </p>
           </div>
           
            <div
              style={{
                marginTop: '1rem',
                padding: '0.85rem 1rem',
                borderRadius: '16px',
                background: 'linear-gradient(90deg, rgba(255, 244, 176, 0.8), rgba(255, 253, 247, 1))',
                color: palette.blue,
                fontStyle: 'italic',
                fontSize: '0.95rem',
              }}
            >
              «Путешествия — это мягкая перезагрузка души и сердца».
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Почему именно мы */}
      <section
        ref={whyUsRef}
        id="why-us"
        className="bg-folk-red px-6"
        style={{ backgroundColor: palette.cream, paddingTop: '4.2rem', paddingBottom: '4.2rem' }}
      >
        <div
          className="max-w-md mx-auto rug-paper-bg"
          style={{
            maxWidth: '100%',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            paddingTop: '2.2rem',
            paddingBottom: '2.2rem',
          }}
        >
          <SectionHeading title="Почему именно мы" />
          <SectionLead text="Мы бережно собираем каждый тур, чтобы он чувствовался как забота." />
          <div className="space-y-6" style={{ gap: '1.5rem' }}>
            {[
              {
                icon: <Heart size={24} />,
                title: 'Авторские маршруты',
                text:
                  'Мы не копируем шаблоны. Каждый маршрут — история со своим характером, ритмом и атмосферой.',
              },
              {
                icon: <Users size={24} />,
                title: 'Женская компания',
                text:
                  'Туры проходят в камерных группах. Это безопасно, уютно и всегда по‑доброму.',
              },
              {
                icon: <Star size={24} />,
                title: 'Проверенные партнёры',
                text:
                  'Мы выбираем лучшие отели, экскурсии и гидов, чтобы впечатления были без сюрпризов.',
              },
              {
                icon: <Plane size={24} />,
                title: 'Полное сопровождение',
                text:
                  'Мы на связи до, во время и после путешествия. Поможем, подскажем и поддержим.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: palette.white,
                  borderRadius: '16px',
                  padding: '1.25rem',
                  boxShadow: '0 10px 20px rgba(31, 46, 77, 0.08)',
                  border: '1px solid rgba(184, 61, 63, 0.08)',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '999px',
                    backgroundColor: palette.lemon,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: palette.red,
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ color: palette.blueSoft, fontSize: '1rem', lineHeight: '1.7' }}>
                  <div style={{ fontWeight: 700, marginBottom: '0.4rem', color: palette.blue }}>{item.title}</div>
                  <p style={{ margin: 0 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Кому подходит и не подходит */}
      <section
        ref={whoSuitsRef}
        id="who-suits"
        className="bg-folk-cream px-6"
        style={{ backgroundColor: palette.white, paddingTop: '4.2rem', paddingBottom: '4.2rem' }}
      >
        <div className="max-w-md mx-auto" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <SectionHeading title="Кому мы подходим" />
          <SectionLead text="Мы делаем путешествия мягкими и продуманными — это чувствуется уже в дороге." />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            <div
              style={{
                backgroundColor: palette.cream,
                borderRadius: '22px',
                padding: '1.4rem',
                border: '1px solid rgba(184, 61, 63, 0.12)',
                boxShadow: '0 14px 26px rgba(31, 46, 77, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    backgroundColor: palette.red,
                    color: palette.white,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CheckCircle size={18} />
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: '1.05rem',
                    color: palette.blue,
                    letterSpacing: '0.04em',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  Для вас, если
                </h3>
              </div>
              <div style={{ display: 'grid', gap: '0.8rem' }}>
                {[
                  { text: 'Ищете спокойный и красивый отдых в женской компании', icon: <Heart size={16} /> },
                  { text: 'Цените заботу, комфорт и внимательные детали', icon: <Star size={16} /> },
                  { text: 'Хотите вдохновения без суеты и плотных графиков', icon: <MapPin size={16} /> },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      backgroundColor: palette.white,
                      borderRadius: '16px',
                      padding: '0.85rem 1rem',
                      border: '1px solid rgba(184, 61, 63, 0.1)',
                      color: palette.blueSoft,
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      display: 'flex',
                      gap: '0.6rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{ color: palette.red, marginTop: '2px' }}>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
        </div>
      </div>

            <div
              style={{
                backgroundColor: palette.white,
                borderRadius: '22px',
                padding: '1.4rem',
                border: '1px solid rgba(31, 46, 77, 0.08)',
                boxShadow: '0 12px 22px rgba(31, 46, 77, 0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(31, 46, 77, 0.08)',
                    color: palette.blue,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <XCircle size={18} />
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: '1.05rem',
                    color: palette.blue,
                    letterSpacing: '0.04em',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  Возможно, не подойдём
                </h3>
              </div>
              <div style={{ display: 'grid', gap: '0.8rem' }}>
                {[
                  { text: 'Нужен самый бюджетный формат без сервиса', icon: <XCircle size={16} /> },
                  { text: 'Предпочитаете полностью самостоятельные поездки', icon: <XCircle size={16} /> },
                  { text: 'Не готовы к общению и совместным активностям', icon: <XCircle size={16} /> },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      backgroundColor: palette.cream,
                      borderRadius: '16px',
                      padding: '0.85rem 1rem',
                      border: '1px solid rgba(31, 46, 77, 0.08)',
                      color: palette.blueSoft,
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      display: 'flex',
                      gap: '0.6rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{ color: 'rgba(31, 46, 77, 0.55)', marginTop: '2px' }}>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
      </section>

      <SectionDivider />

      {/* Наши туры */}
      <section
        ref={toursRef}
        id="tours"
        className="bg-folk-red px-6"
        style={{ backgroundColor: palette.red, paddingTop: '4.2rem', paddingBottom: '4.2rem' }}
      >
        <div className="max-w-md mx-auto" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <SectionHeading title="Наши туры" color={palette.cream} accentColor={palette.cream} />
          <SectionLead
            text="Классика, природа, уютные города — выбирайте направление, а мы позаботимся обо всём."
            color={palette.cream}
          />
          
          <div
            style={{
              display: 'flex',
              gap: '0.6rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}
          >
            {['История', 'Природа', 'Комфорт', 'Атмосфера'].map((label) => (
              <span
                key={label}
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '999px',
                  backgroundColor: palette.white,
                  border: '1px solid rgba(184, 61, 63, 0.15)',
                  color: palette.blue,
                  fontSize: '0.72rem',
                  fontWeight: 600,
                }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-6 mb-12" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
            {tours.map((tour, index) => (
              <div
                key={tour.id}
                style={{
                  backgroundColor: palette.white,
                  borderRadius: '20px',
                  padding: '1.4rem',
                  boxShadow: '0 14px 26px rgba(31, 46, 77, 0.1)',
                  border: '1px solid rgba(184, 61, 63, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.9rem',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      backgroundColor: index % 2 === 0 ? palette.lemon : 'rgba(184, 61, 63, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: palette.red,
                    }}
                  >
                    {React.cloneElement(tour.icon as React.ReactElement<any>, { size: 22 })}
                  </div>
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: '1.1rem',
                        color: palette.blue,
                        fontWeight: 700,
                      }}
                    >
                      {tour.title}
                    </h3>
                    {tour.subtitle && (
                      <p style={{ margin: 0, marginTop: '0.25rem', color: palette.red, fontSize: '0.78rem', fontWeight: 600 }}>
                        {tour.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <p style={{ margin: 0, color: palette.blueSoft, lineHeight: '1.7', fontSize: '0.95rem' }}>
                  Тёплый формат тура с комфортным ритмом, культурными открытиями и временем на отдых.
                </p>

                <button
                  onClick={() => scrollToSection('contact')}
                  style={{
                    alignSelf: 'flex-start',
                    padding: '0.55rem 1.3rem',
                    borderRadius: '999px',
                    border: '1px solid rgba(184, 61, 63, 0.25)',
                    backgroundColor: palette.lemon,
                    color: palette.blue,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Подробнее
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p
              className="text-base mb-6 leading-relaxed"
              style={{ fontSize: '1rem', lineHeight: '1.75', marginBottom: '2rem', color: palette.cream }}
            >
              Хотите подобрать тур под себя? Напишите нам, и мы предложим варианты,
              расскажем о деталях и поможем выбрать идеальный формат отдыха.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              style={{
                padding: '0.95rem 2.4rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                color: palette.red,
                backgroundColor: palette.cream,
                borderRadius: '999px',
                border: `1px solid ${palette.cream}`,
                boxShadow: '0 10px 20px rgba(31, 46, 77, 0.18)',
                cursor: 'pointer',
              }}
            >
              Связаться с нами
            </button>
          </div>
             </div>
      </section>

      <SectionDivider />

      {/* Галерея */}
      <section
        id="gallery"
        className="bg-folk-cream px-6"
        style={{ backgroundColor: palette.white, paddingTop: '4.2rem', paddingBottom: '4.2rem' }}
      >
        <div className="max-w-md mx-auto" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <SectionHeading title="Галерея" />
          <SectionLead text="10 мгновений природы и путешествий — для вдохновения и настроения." />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '0.75rem',
            }}
          >
            {galleryPhotos.map((photo, index) => (
              <div
                key={`${photo}-${index}`}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 22px rgba(31, 46, 77, 0.12)',
                  border: '1px solid rgba(184, 61, 63, 0.08)',
                  aspectRatio: index % 5 === 0 ? '4/5' : '1/1',
                }}
              >
                <img
                  src={photo}
                  alt={`Природа ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
             </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Связаться с нами */}
      <section
        ref={contactRef}
        id="contact"
        className="bg-folk-cream px-6"
        style={{ backgroundColor: palette.white, paddingTop: '4.2rem', paddingBottom: '4.2rem' }}
      >
        <div className="max-w-md mx-auto" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <SectionHeading title="Связаться с нами" />
          <SectionLead text="Напишите нам удобным способом — быстро ответим и подберём лучший маршрут." />
          
          <div style={{ ...contentCardStyle, padding: '1.6rem' }}>
            <div className="flex flex-col gap-5 mb-10" style={{ gap: '1.1rem', marginBottom: '2rem' }}>
              <a
                href="https://t.me/matreshkico"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '1.05rem',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  borderRadius: '999px',
                  backgroundColor: palette.blue,
                  color: palette.white,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 10px 20px rgba(31, 46, 77, 0.25)',
                  textDecoration: 'none',
                }}
              >
                <Send size={22} />
                Telegram
              </a>
              <a
                href="https://instagram.com/matreshkico"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '1.05rem',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  borderRadius: '999px',
                  background: `linear-gradient(90deg, ${palette.red} 0%, #D46A6B 100%)`,
                  color: palette.white,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 10px 20px rgba(184, 61, 63, 0.3)',
                  textDecoration: 'none',
                }}
              >
                <Instagram size={22} />
                Instagram
              </a>
            </div>

            <div className="text-center text-folk-blue/70 text-base leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.75', color: palette.blueSoft }}>
              <p className="mb-3" style={{ marginBottom: '0.8rem' }}>
                Телефон:{' '}
                <a href="tel:+79001234567" style={{ color: palette.red, fontWeight: 'bold', textDecoration: 'none' }}>
                  +7 900 123 45 67
                </a>
              </p>
              <p style={{ margin: 0 }}>
                Email:{' '}
                <a href="mailto:info@matreshkico.ru" style={{ color: palette.red, fontWeight: 'bold', textDecoration: 'none' }}>
                  info@matreshkico.ru
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

          {/* Footer */}
      <footer className="bg-folk-red py-8 px-6" style={{ backgroundColor: '#142033' }}>
        <div className="max-w-md mx-auto text-center" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div
            style={{
              backgroundColor: 'rgba(255, 253, 247, 0.05)',
              borderRadius: '20px',
              padding: '1.4rem 1.2rem',
              border: '1px solid rgba(255, 244, 176, 0.18)',
              boxShadow: '0 16px 28px rgba(10, 20, 36, 0.35)',
            }}
          >
            <div
              style={{
                padding: '0.8rem 1rem',
                borderRadius: '14px',
                backgroundColor: 'rgba(255, 244, 176, 0.12)',
                color: 'rgba(255, 253, 247, 0.9)',
                fontSize: '0.85rem',
                lineHeight: '1.6',
                marginBottom: '0.9rem',
                fontStyle: 'italic',
              }}
            >
              «Путешествие — это разговор с миром и с собой».
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
              {[
                { href: 'https://instagram.com/matreshkico', icon: <Instagram size={15} />, label: 'Instagram' },
                { href: 'https://t.me/matreshkico', icon: <Send size={15} />, label: 'Telegram' },
                { href: 'mailto:info@matreshkico.ru', icon: <MessageCircle size={15} />, label: 'Email' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 244, 176, 0.16)',
                    color: '#FFFDF7',
                    border: '1px solid rgba(255, 244, 176, 0.3)',
                    textDecoration: 'none',
                  }}
                >
                  {item.icon}
                </a>
              ))}
             </div>
            <p style={{ margin: 0, color: 'rgba(255, 253, 247, 0.85)', fontSize: '0.78rem', letterSpacing: '0.08em' }}>
              Основано в 2023
            </p>
            <a
              href="#"
              style={{
                display: 'inline-block',
                marginTop: '0.65rem',
                color: 'rgba(255, 253, 247, 0.7)',
                fontSize: '0.7rem',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Политика конфиденциальности
            </a>
            <p style={{ marginTop: '0.75rem', color: 'rgba(255, 253, 247, 0.65)', fontSize: '0.7rem' }}>
              Matreshki&Co — женские путешествия с русской душой
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;