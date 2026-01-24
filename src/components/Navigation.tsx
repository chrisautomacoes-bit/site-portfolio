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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!visible) {
      setMenuOpen(false);
    }
  }, [visible]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(min-width: 640px)');
    const handleChange = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-4 pb-5 pt-[calc(env(safe-area-inset-top)+1.1rem)] transition-all duration-500 backdrop-blur-md sm:px-8 sm:pt-5 sm:pb-5 ${
        visible
          ? 'opacity-100 border-b border-border/40 shadow-[0_6px_24px_rgba(0,0,0,0.45)]'
          : 'opacity-0 pointer-events-none border-transparent shadow-none'
      }`}
      style={{
        background: visible
          ? 'linear-gradient(to bottom, hsl(240 3% 6% / 0.98), hsl(240 3% 6% / 0.9), hsl(240 3% 6% / 0.55), transparent)'
          : 'transparent'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between sm:hidden">
          <a href="#hero" className="text-[10px] tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors">
            ↑ topo
          </a>
          <button
            type="button"
            className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
            <span className="flex flex-col gap-1">
              <span
                className={`block h-px w-4 bg-current transition-transform duration-300 ${
                  menuOpen ? 'translate-y-[4px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-px w-4 bg-current transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-px w-4 bg-current transition-transform duration-300 ${
                  menuOpen ? '-translate-y-[4px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="site-nav"
          className={`mt-3 ${menuOpen ? 'block' : 'hidden'} sm:mt-0 sm:block`}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="#hero"
              className="hidden sm:inline text-[10px] tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors sm:text-xs whitespace-nowrap"
            >
              ↑ topo
            </a>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-10">
              {navItems.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="text-[10px] tracking-widest uppercase text-foreground/75 hover:text-primary transition-colors sm:text-xs whitespace-nowrap"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
