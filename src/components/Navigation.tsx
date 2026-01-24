import { useState, useEffect } from 'react';

const navItems = [
  { label: 'projetos', href: '#work' },
  { label: 'empresas', href: '#clients' },
  { label: 'feedbacks', href: '#feedbacks' },
  { label: 'laboratório', href: '#lab' },
  { label: 'sobre', href: '#about' },
  { label: 'contato', href: '#contact' },
];

const Navigation = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-4 pb-4 pt-[calc(env(safe-area-inset-top)+1rem)] transition-all duration-500 sm:px-8 sm:pt-5 sm:pb-5 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        background: visible ? 'linear-gradient(to bottom, hsl(240 3% 10% / 0.95), hsl(240 3% 8% / 0.7), transparent)' : 'transparent'
      }}
    >
      <div className="flex flex-col gap-3 max-w-6xl mx-auto sm:flex-row sm:items-center sm:justify-between">
        <a href="#hero" className="text-[10px] tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors sm:text-xs">
          ↑ topo
        </a>
        
        <div className="flex flex-wrap gap-4 sm:gap-10">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-[10px] tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors sm:text-xs"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
