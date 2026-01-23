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
    <div className="relative w-full overflow-hidden" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <div className="scalloped-border absolute -top-4 left-0 w-full z-10"></div>
      <div className="lace-decoration absolute top-1 left-0 w-full z-20 opacity-50"></div>
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
          fontFamily: 'Georgia, "Times New Roman", serif',
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
    { top: '12px', left: '10px', size: 44 },
    { top: '16px', right: '12px', size: 46 },
    { top: '26px', left: '28%', size: 36 },
    { top: '24px', right: '30%', size: 34 },
    { top: '48px', left: '6%', size: 42 },
    { top: '52px', right: '6%', size: 40 },
    { top: '64px', left: '42%', size: 46 },
    { top: '70px', right: '40%', size: 44 },
    { top: '88px', left: '18%', size: 38 },
    { top: '92px', right: '20%', size: 40 },
    { top: '110px', left: '50%', size: 56, transform: 'translateX(-50%)' },
    { top: '120px', left: '8%', size: 36 },
    { top: '124px', right: '8%', size: 36 },
    { top: '138px', left: '30%', size: 34 },
    { top: '140px', right: '32%', size: 34 },
    { top: '156px', left: '50%', size: 40, transform: 'translateX(-50%)' },
  ];

  const FolkFlowerSmall = ({ style }: { style: React.CSSProperties }) => (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', ...style }}
    >
      <circle cx="60" cy="60" r="12" fill={palette.blue} />
      <circle cx="60" cy="28" r="16" fill={palette.red} />
      <circle cx="60" cy="92" r="16" fill={palette.red} />
      <circle cx="28" cy="60" r="16" fill={palette.red} />
      <circle cx="92" cy="60" r="16" fill={palette.red} />
      <circle cx="42" cy="40" r="10" fill={palette.lemon} />
      <circle cx="78" cy="40" r="10" fill={palette.lemon} />
      <circle cx="42" cy="80" r="10" fill={palette.lemon} />
      <circle cx="78" cy="80" r="10" fill={palette.lemon} />
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
            height: '210px',
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
              height: '70px',
              background: 'linear-gradient(180deg, rgba(255, 244, 176, 0) 0%, rgba(255, 244, 176, 0.8) 70%)',
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
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: '2rem',
                fontWeight: 700,
                color: palette.blue,
                margin: 0,
                lineHeight: '1.2',
                letterSpacing: '0.02em',
                textAlign: 'center',
                marginLeft: '-6px',
              }}
            >
              Matreshki&Co
            </h1>
            <p
              style={{
                fontFamily: '"Brush Script MT", "Apple Chancery", cursive',
                fontSize: '1.6rem',
                color: palette.red,
                margin: 0,
                marginTop: '0.25rem',
              }}
            >
              Matreshki
            </p>
            <p
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
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
          <div className="flex flex-col items-center mb-10" style={{ marginBottom: '2.5rem' }}>
            <div
              className="w-40 h-40 rounded-full border-4 border-folk-red overflow-hidden mb-6 shadow-lg"
              style={{ width: '10rem', height: '10rem', borderColor: palette.red }}
            >
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
                alt="Александрия"
                className="w-full h-full object-cover"
              />
            </div>
            <h3
              className="font-serif text-3xl text-folk-blue mb-3"
              style={{ fontSize: '2rem', marginBottom: '0.6rem', color: palette.blue }}
            >
              Александрия
            </h3>
            <p className="text-folk-blue/60 text-sm italic" style={{ fontSize: '0.9rem', color: palette.blueSoft }}>
              Основательница и куратор авторских маршрутов
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.8rem',
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}
          >
            {[
              { label: '10+ лет опыта' },
              { label: 'Комфорт 24/7' },
              { label: 'Малые группы' },
            ].map((item) => (
              <span
                key={item.label}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '999px',
                  backgroundColor: palette.lemon,
                  border: '1px solid rgba(184, 61, 63, 0.15)',
                  color: palette.blue,
                  fontSize: '0.78rem',
                  fontWeight: 600,
                }}
              >
                {item.label}
              </span>
            ))}
          </div>
          <div style={{ ...contentCardStyle, marginTop: '0.8rem' }}>
            <div className="space-y-6 text-base leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.75', color: palette.blueSoft }}>
              <p>
                Меня зовут Александрия. Я более 10 лет путешествую и собираю лучшие маршруты,
                которые помогают женщинам отдыхать красиво и безопасно.
              </p>
              <p>
                Я верю, что каждая женщина заслуживает путешествия, где всё продумано: от отеля
                до впечатлений. Поэтому наши туры — это забота, эстетика и вдохновение.
              </p>
              <p>
                В каждой поездке я делюсь любовью к традициям — мы открываем ремёсла, кухни
                и местные легенды, чтобы чувствовать живую историю места.
              </p>
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
        style={{ backgroundColor: palette.red, paddingTop: '4.2rem', paddingBottom: '4.2rem' }}
      >
        <div className="max-w-md mx-auto" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <SectionHeading title="Почему именно мы" color={palette.cream} accentColor={palette.cream} />
          <SectionLead text="Мы бережно собираем каждый тур, чтобы он чувствовался как забота." color={palette.cream} />
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
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ ...contentCardStyle, backgroundColor: palette.cream }}>
              <h3
                className="font-bold text-folk-red mb-6 text-xl flex items-center gap-3"
                style={{ fontSize: '1.15rem', marginBottom: '1.5rem', color: palette.red }}
              >
                <CheckCircle size={22} className="text-folk-red" />
                Нам подходит, если вы:
              </h3>
              <ul className="space-y-5 text-base leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.75', color: palette.blueSoft }}>
                <li className="flex items-start gap-3" style={{ gap: '0.9rem' }}>
                  <span style={{ color: palette.red, fontSize: '1.2rem' }}>✓</span>
                  <span>Ищете комфортные поездки в женской компании, где можно расслабиться и быть собой.</span>
                </li>
                <li className="flex items-start gap-3" style={{ gap: '0.9rem' }}>
                  <span style={{ color: palette.red, fontSize: '1.2rem' }}>✓</span>
                  <span>Цените заботу, красивый сервис и внимание к деталям.</span>
                </li>
                <li className="flex items-start gap-3" style={{ gap: '0.9rem' }}>
                  <span style={{ color: palette.red, fontSize: '1.2rem' }}>✓</span>
                  <span>Хотите открыть новые места и получить вдохновение без суеты.</span>
                </li>
              </ul>
            </div>

            <div style={contentCardStyle}>
              <h3
                className="font-bold text-folk-blue mb-6 text-xl flex items-center gap-3"
                style={{ fontSize: '1.15rem', marginBottom: '1.5rem', color: palette.blue }}
              >
                <XCircle size={22} className="text-folk-blue" />
                Возможно, мы не подходим, если вы:
              </h3>
              <ul className="space-y-5 text-base leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.75', color: palette.blueSoft }}>
                <li className="flex items-start gap-3" style={{ gap: '0.9rem' }}>
                  <span style={{ color: 'rgba(31, 46, 77, 0.5)', fontSize: '1.2rem' }}>✗</span>
                  <span>Ищете максимально бюджетный вариант без сервиса и сопровождения.</span>
                </li>
                <li className="flex items-start gap-3" style={{ gap: '0.9rem' }}>
                  <span style={{ color: 'rgba(31, 46, 77, 0.5)', fontSize: '1.2rem' }}>✗</span>
                  <span>Предпочитаете полностью самостоятельные поездки без группы.</span>
                </li>
                <li className="flex items-start gap-3" style={{ gap: '0.9rem' }}>
                  <span style={{ color: 'rgba(31, 46, 77, 0.5)', fontSize: '1.2rem' }}>✗</span>
                  <span>Не готовы к общению и совместным активностям.</span>
                </li>
              </ul>
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
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            {[
              { href: 'https://instagram.com/matreshkico', icon: <Instagram size={16} />, label: 'Instagram' },
              { href: 'https://t.me/matreshkico', icon: <Send size={16} />, label: 'Telegram' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 244, 176, 0.12)',
                  color: '#FFFDF7',
                  border: '1px solid rgba(255, 244, 176, 0.3)',
                  textDecoration: 'none',
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p style={{ margin: 0, color: 'rgba(255, 253, 247, 0.8)', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
            Основано в 2023
          </p>
          <a
            href="#"
            style={{
              display: 'inline-block',
              marginTop: '0.6rem',
              color: 'rgba(255, 253, 247, 0.7)',
              fontSize: '0.7rem',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Политика конфиденциальности
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;