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
import { ThreeWomen } from './components/ThreeWomen';
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

// Simple Folk Flower SVG Component - уменьшенный размер
const FolkFlower = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '40px', height: '60px', flexShrink: 0 }}>
    {/* Stems */}
    <path d="M50 200C50 150 20 120 20 80" stroke="#9E2A2B" strokeWidth="2"/>
    <path d="M50 200C50 150 80 120 80 80" stroke="#9E2A2B" strokeWidth="2"/>
    
    {/* Big Red Flower */}
    <circle cx="20" cy="80" r="15" fill="#9E2A2B" />
    <circle cx="20" cy="80" r="5" fill="#F7F4EB" />
    <path d="M20 60C10 60 5 70 5 80C5 90 10 100 20 100C30 100 35 90 35 80C35 70 30 60 20 60Z" stroke="#9E2A2B" strokeWidth="1" fill="none"/>
    
    {/* Big Blue Flower */}
    <circle cx="80" cy="80" r="15" fill="#1F2E4D" />
    <circle cx="80" cy="80" r="5" fill="#F7F4EB" />
    <path d="M80 60C70 60 65 70 65 80C65 90 70 100 80 100C90 100 95 90 95 80C95 70 90 60 80 60Z" stroke="#1F2E4D" strokeWidth="1" fill="none"/>

    {/* Small berries */}
    <circle cx="40" cy="140" r="4" fill="#1F2E4D" />
    <circle cx="60" cy="120" r="4" fill="#9E2A2B" />
  </svg>
);

function App() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Синхронная детекция устройства для мгновенного рендера
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    const isSmallScreen = window.innerWidth <= 768;
    const mobile = isMobileDevice || isSmallScreen;
    
    setIsMobile(mobile);
    
    // Минимальная задержка для показа лоадера
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
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

  // Show loader
  if (isLoading || isMobile === null) {
    return <Loader />;
  }

  // Show desktop message if not mobile
  if (!isMobile) {
    return <DesktopMessage />;
  }

  return (
    <div className="min-h-screen font-sans relative" style={{ backgroundColor: '#FFFACD', color: '#000000', width: '100%', minHeight: '100vh' }}>
      <BurgerMenu onNavigate={scrollToSection} />
      
      {/* Hero Section - новый дизайн с логотипом и ягодами */}
      <div style={{ maxWidth: '100%', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '1.5rem', paddingBottom: '2rem' }}>
        {/* Логотип с ягодами и текст - вверху слева */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <LogoWithBerries />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h1 style={{ 
              fontFamily: 'Arial, sans-serif',
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#000000', 
              margin: 0,
              lineHeight: '1.2'
            }}>
              Matreshki&Co
            </h1>
            <p style={{ 
              fontFamily: 'Brush Script MT, cursive',
              fontSize: '1.25rem', 
              color: '#000000', 
              margin: 0,
              marginTop: '0.25rem'
            }}>
              Matreshki
            </p>
            <p style={{ 
              fontFamily: 'Arial, sans-serif',
              fontSize: '0.625rem', 
              fontWeight: 'bold', 
              letterSpacing: '0.1em', 
              color: '#000000', 
              margin: 0,
              marginTop: '0.25rem',
              textTransform: 'uppercase'
            }}>
              WOMEN'S TRAVEL COMPANY
            </p>
          </div>
        </div>

        {/* Три женщины в центре */}
        <ThreeWomen />

        {/* Три карточки туров внизу */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem', 
          marginTop: '2rem',
          paddingBottom: '1rem'
        }}>
          {homeTours.map((tour) => (
            <a
              key={tour.id}
              href={tour.url}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('tours');
              }}
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                width: '100%',
                aspectRatio: '16/10',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textDecoration: 'none',
                display: 'block'
              }}
            >
              <img 
                src={tour.image} 
                alt={tour.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {tour.title === 'АРХЫЗ' && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 100, 200, 0.9)',
                  padding: '0.75rem 1rem',
                  color: '#FFFFFF'
                }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold',
                    marginBottom: '0.25rem'
                  }}>
                    {tour.title}
                  </div>
                  <div style={{ fontSize: '0.875rem' }}>
                    {tour.dates}
                  </div>
                  <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>
                    {tour.subtitle}
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* О нас */}
      <section ref={aboutRef} id="about" className="bg-folk-red px-6" style={{ backgroundColor: '#B83D3F', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-md mx-auto" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <h2 className="font-display text-3xl mb-8 text-center" style={{ marginBottom: '3rem', color: '#000000' }}>О НАС</h2>
          <div className="space-y-6 text-base leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#000000' }}>
            <p>
              Matreshki&Co — это женское турагентство, созданное специально для прекрасных дам, 
              которые мечтают о незабываемых путешествиях. Мы организуем авторские туры по России 
              и зарубежным странам, где каждая деталь продумана с любовью.
            </p>
            <p>
              Наша миссия — показать вам мир через призму красоты, культуры и женской дружбы. 
              Мы создаём не просто поездки, а целые истории, которые останутся с вами навсегда.
            </p>
            <p>
              Каждое наше путешествие — это не просто экскурсия, а настоящее приключение, которое 
              раскрывает новые грани вашей личности. Мы верим, что путешествия должны быть 
              комфортными, безопасными и наполненными прекрасными моментами.
            </p>
            <p>
              Присоединяйтесь к нашему сообществу женщин-путешественниц и откройте для себя мир 
              в компании единомышленниц, которые ценят красоту, культуру и настоящие эмоции.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Об авторе */}
      <section ref={authorRef} id="author" className="bg-folk-cream px-6" style={{ backgroundColor: '#F7F4EB', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-md mx-auto" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <h2 className="font-display text-3xl text-folk-blue mb-8 text-center" style={{ marginBottom: '3rem' }}>ОБ АВТОРЕ</h2>
          <div className="flex flex-col items-center mb-10" style={{ marginBottom: '3rem' }}>
            <div className="w-40 h-40 rounded-full border-4 border-folk-red overflow-hidden mb-6 shadow-lg" style={{ width: '10rem', height: '10rem' }}>
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" 
                alt="Александрия" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-serif text-3xl text-folk-blue mb-3" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Александрия</h3>
            <p className="text-folk-blue/60 text-sm italic" style={{ fontSize: '0.875rem' }}>Основательница и путешественница</p>
          </div>
          <div className="space-y-6 text-folk-blue/80 text-base leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
            <p>
              Меня зовут Александрия, и я основательница Matreshki&Co. Более 10 лет я путешествую 
              по миру, открывая для себя новые места и культуры. Моя страсть к путешествиям 
              привела к созданию этого проекта, который объединяет женщин со всего мира.
            </p>
            <p>
              Я верю, что каждая женщина заслуживает незабываемых приключений. Моя цель — 
              организовать для вас такие поездки, которые станут яркими воспоминаниями и 
              подарят вдохновение на долгие годы. Каждое путешествие я планирую с особой 
              тщательностью, чтобы оно было идеальным.
            </p>
            <p>
              В каждом туре я делюсь своими знаниями, опытом и любовью к путешествиям. 
              Мы вместе открываем секреты местных жителей, пробуем аутентичную кухню и 
              погружаемся в культуру каждой страны.
            </p>
            <p>
              Присоединяйтесь к нашему сообществу и откройте для себя мир вместе с нами! 
              Я с радостью помогу вам найти ваше идеальное путешествие и создать воспоминания, 
              которые будут согревать вас долгие годы.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Почему именно мы */}
      <section ref={whyUsRef} id="why-us" className="bg-folk-red px-6" style={{ backgroundColor: '#B83D3F', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-md mx-auto" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <h2 className="font-display text-3xl mb-10 text-center" style={{ marginBottom: '3rem', color: '#000000' }}>ПОЧЕМУ ИМЕННО МЫ</h2>
          <div className="space-y-8" style={{ gap: '2.5rem' }}>
            <div className="flex items-start gap-5" style={{ gap: '1.5rem' }}>
              <div className="bg-folk-cream p-4 rounded-full flex-shrink-0" style={{ padding: '1rem', backgroundColor: '#F7F4EB' }}>
                <Heart size={28} style={{ color: '#000000' }} />
              </div>
              <div className="text-base" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#000000' }}>
                <h3 className="font-bold mb-3 text-lg" style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: '#000000' }}>Авторский подход</h3>
                <p>Каждый тур создаётся индивидуально с учётом ваших пожеланий и интересов. 
                Мы не используем готовые шаблоны — каждый маршрут уникален и продуман до мельчайших деталей 
                специально для вас и вашей группы.</p>
              </div>
            </div>
            <div className="flex items-start gap-5" style={{ gap: '1.5rem' }}>
              <div className="bg-folk-cream p-4 rounded-full flex-shrink-0" style={{ padding: '1rem', backgroundColor: '#F7F4EB' }}>
                <Users size={28} style={{ color: '#000000' }} />
              </div>
              <div className="text-base" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#000000' }}>
                <h3 className="font-bold mb-3 text-lg" style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: '#000000' }}>Женское сообщество</h3>
                <p>Путешествуйте в компании единомышленниц и заводите новых друзей. Наши туры — это 
                не просто поездки, а возможность найти подруг, разделяющих ваши интересы и ценности. 
                Мы создаём атмосферу поддержки и взаимопонимания.</p>
              </div>
            </div>
            <div className="flex items-start gap-5" style={{ gap: '1.5rem' }}>
              <div className="bg-folk-cream p-4 rounded-full flex-shrink-0" style={{ padding: '1rem', backgroundColor: '#F7F4EB' }}>
                <Star size={28} style={{ color: '#000000' }} />
              </div>
              <div className="text-base" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#000000' }}>
                <h3 className="font-bold mb-3 text-lg" style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: '#000000' }}>Проверенные маршруты</h3>
                <p>Мы тщательно отбираем места и партнёров, чтобы ваше путешествие было комфортным и безопасным. 
                Каждый отель, ресторан и экскурсия проходят проверку лично нами. Мы знаем каждое место, 
                куда ведём наших путешественниц, и гарантируем высокое качество услуг.</p>
              </div>
            </div>
            <div className="flex items-start gap-5" style={{ gap: '1.5rem' }}>
              <div className="bg-folk-cream p-4 rounded-full flex-shrink-0" style={{ padding: '1rem', backgroundColor: '#F7F4EB' }}>
                <Plane size={28} style={{ color: '#000000' }} />
              </div>
              <div className="text-base" style={{ fontSize: '1rem', lineHeight: '1.75', color: '#000000' }}>
                <h3 className="font-bold mb-3 text-lg" style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: '#000000' }}>Полное сопровождение</h3>
                <p>От момента бронирования до возвращения домой мы всегда на связи и готовы помочь. 
                Мы помогаем с оформлением документов, консультируем по всем вопросам и остаёмся 
                доступными 24/7 во время всего путешествия. Ваш комфорт и безопасность — наш приоритет.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Кому подходит и не подходит */}
      <section ref={whoSuitsRef} id="who-suits" className="bg-folk-cream px-6" style={{ backgroundColor: '#F7F4EB', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-md mx-auto" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <h2 className="font-display text-3xl text-folk-blue mb-10 text-center" style={{ marginBottom: '3rem' }}>КОМУ МЫ ПОДХОДИМ</h2>
          
          <div className="mb-12" style={{ marginBottom: '4rem' }}>
            <h3 className="font-bold text-folk-red mb-6 text-xl flex items-center gap-3" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              <CheckCircle size={24} className="text-folk-red" />
              Нам подходит, если вы:
            </h3>
            <ul className="space-y-5 text-folk-blue/80 text-base leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.75', gap: '1.5rem' }}>
              <li className="flex items-start gap-3" style={{ gap: '1rem' }}>
                <span className="text-folk-red mt-1 text-xl" style={{ fontSize: '1.25rem' }}>✓</span>
                <span>Ищете комфортные и безопасные путешествия в женской компании, где можно расслабиться и быть собой</span>
              </li>
              <li className="flex items-start gap-3" style={{ gap: '1rem' }}>
                <span className="text-folk-red mt-1 text-xl" style={{ fontSize: '1.25rem' }}>✓</span>
                <span>Цените индивидуальный подход и внимание к деталям, когда каждая мелочь продумана специально для вас</span>
              </li>
              <li className="flex items-start gap-3" style={{ gap: '1rem' }}>
                <span className="text-folk-red mt-1 text-xl" style={{ fontSize: '1.25rem' }}>✓</span>
                <span>Хотите открыть для себя новые места и культуры, получить незабываемые впечатления и расширить горизонты</span>
              </li>
              <li className="flex items-start gap-3" style={{ gap: '1rem' }}>
                <span className="text-folk-red mt-1 text-xl" style={{ fontSize: '1.25rem' }}>✓</span>
                <span>Готовы к приключениям и новым знакомствам, открыты общению и готовы делиться опытом с другими</span>
              </li>
              <li className="flex items-start gap-3" style={{ gap: '1rem' }}>
                <span className="text-folk-red mt-1 text-xl" style={{ fontSize: '1.25rem' }}>✓</span>
                <span>Ищете вдохновение и хотите отдохнуть от рутины, зарядиться энергией и получить новые эмоции</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-folk-blue mb-6 text-xl flex items-center gap-3" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              <XCircle size={24} className="text-folk-blue" />
              Возможно, мы не подходим, если вы:
            </h3>
            <ul className="space-y-5 text-folk-blue/60 text-base leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.75', gap: '1.5rem' }}>
              <li className="flex items-start gap-3" style={{ gap: '1rem' }}>
                <span className="text-folk-blue/40 mt-1 text-xl" style={{ fontSize: '1.25rem' }}>✗</span>
                <span>Ищете бюджетные поездки эконом-класса — мы предлагаем качественный сервис и комфортные условия</span>
              </li>
              <li className="flex items-start gap-3" style={{ gap: '1rem' }}>
                <span className="text-folk-blue/40 mt-1 text-xl" style={{ fontSize: '1.25rem' }}>✗</span>
                <span>Предпочитаете самостоятельные путешествия без сопровождения — наши туры всегда проходят в группах</span>
              </li>
              <li className="flex items-start gap-3" style={{ gap: '1rem' }}>
                <span className="text-folk-blue/40 mt-1 text-xl" style={{ fontSize: '1.25rem' }}>✗</span>
                <span>Не готовы к общению и взаимодействию с группой — мы ценим атмосферу дружбы и взаимопонимания</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Наши туры */}
      <section ref={toursRef} id="tours" className="bg-folk-red px-6" style={{ backgroundColor: '#B83D3F', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-md mx-auto" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <h2 className="font-display text-3xl mb-8 text-center" style={{ marginBottom: '2rem', color: '#000000' }}>НАШИ ТУРЫ</h2>
          <p className="text-base text-center mb-10 leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.75', marginBottom: '3rem', color: '#000000' }}>
            Выберите направление своей мечты и отправляйтесь в незабываемое путешествие. 
            Каждый наш тур — это уникальная возможность открыть для себя новые горизонты, 
            познакомиться с удивительными людьми и создать воспоминания на всю жизнь.
          </p>
          
          <div className="flex flex-col gap-6 mb-12" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
            {tours.map((tour) => (
              <LinkCard key={tour.id} item={tour} variant="dark" />
            ))}
          </div>

          <div className="text-center">
            <p className="text-base mb-6 leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.75', marginBottom: '2rem', color: '#000000' }}>
              Хотите узнать больше о наших турах? Свяжитесь с нами, и мы расскажем 
              подробности о каждом маршруте, поможем выбрать идеальное направление и 
              ответим на все ваши вопросы.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-folk-cream text-folk-red px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg hover:bg-white transition-colors"
              style={{ padding: '1rem 2.5rem', fontSize: '0.875rem', fontWeight: 'bold' }}
            >
              Связаться с нами
            </button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Связаться с нами */}
      <section ref={contactRef} id="contact" className="bg-folk-cream px-6" style={{ backgroundColor: '#F7F4EB', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-md mx-auto" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <h2 className="font-display text-3xl text-folk-blue mb-8 text-center" style={{ marginBottom: '2rem' }}>СВЯЗАТЬСЯ С НАМИ</h2>
          <p className="text-folk-blue/80 text-base text-center mb-10 leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.75', marginBottom: '3rem' }}>
            Мы всегда рады ответить на ваши вопросы и помочь выбрать идеальное путешествие. 
            Свяжитесь с нами любым удобным способом — через Telegram, Instagram или по телефону. 
            Мы ответим в ближайшее время и поможем спланировать ваше идеальное приключение.
          </p>
          
          <div className="flex flex-col gap-5 mb-10" style={{ gap: '1.25rem', marginBottom: '3rem' }}>
            <a
              href="https://t.me/matreshkico"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-folk-blue text-folk-cream p-5 rounded-full flex items-center justify-center gap-3 font-bold text-base uppercase tracking-wider shadow-lg hover:bg-blue-900 transition-colors"
              style={{ padding: '1.25rem', fontSize: '1rem' }}
            >
              <Send size={24} />
              Telegram
            </a>
            <a
              href="https://instagram.com/matreshkico"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-5 rounded-full flex items-center justify-center gap-3 font-bold text-base uppercase tracking-wider shadow-lg hover:opacity-90 transition-opacity"
              style={{ padding: '1.25rem', fontSize: '1rem' }}
            >
              <Instagram size={24} />
              Instagram
            </a>
          </div>

          <div className="text-center text-folk-blue/70 text-base leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
            <p className="mb-3" style={{ marginBottom: '1rem' }}>
              Телефон: <a href="tel:+79001234567" className="text-folk-red font-bold hover:underline" style={{ color: '#9E2A2B', fontWeight: 'bold' }}>+7 900 123 45 67</a>
            </p>
            <p>
              Email: <a href="mailto:info@matreshkico.ru" className="text-folk-red font-bold hover:underline" style={{ color: '#9E2A2B', fontWeight: 'bold' }}>info@matreshkico.ru</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-folk-red py-8 px-6" style={{ backgroundColor: '#B83D3F' }}>
        <div className="max-w-md mx-auto text-center" style={{ maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div className="flex justify-center gap-6 mb-4" style={{ color: '#000000' }}>
            <a 
              href="https://instagram.com/matreshkico" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#000000' }}
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://t.me/matreshkico" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#000000' }}
            >
              <Send size={20} />
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
            © 2025 Matreshki Co.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;