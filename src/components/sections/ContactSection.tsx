const ContactSection = () => {
  return (
    <section id="contact" className="min-h-[50vh] py-32 px-8 md:px-16 lg:px-24 relative section-shell">
      <div className="max-w-sm">
        {/* Section marker */}
        <h2 className="section-marker reveal">
          006 — contato
        </h2>

        {/* Simple, functional */}
        <div className="reveal reveal-delay-1">
          <a 
            href="mailto:Christian_status@hotmail.com" 
            className="link-subtle text-headline block mb-4"
          >
            Christian_status@hotmail.com
          </a>
          <a
            href="https://wa.me/5541998880180"
            target="_blank"
            rel="noopener noreferrer"
            className="link-subtle text-technical block mb-8"
          >
            +55 41 99888-0180
          </a>
          
          <div className="flex flex-wrap gap-6">
            <a 
              href="https://github.com/ChristianLiborio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-subtle text-technical"
            >
              github
            </a>
            <a 
              href="https://www.linkedin.com/in/christian-liborio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-subtle text-technical"
            >
              linkedin
            </a>
            <a
              href="https://www.facebook.com/ChristianLiboriodeOliveira/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-subtle text-technical"
            >
              facebook
            </a>
            <a
              href="https://www.instagram.com/sulchriss/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-subtle text-technical"
            >
              instagram
            </a>
          </div>
        </div>

        {/* Brief note */}
        <p className="text-body text-sm mt-12 reveal reveal-delay-2 max-w-xs">
          Respondo em alguns dias. Às vezes em horas.
          <br />
          <span className="text-ghost">Depende do fluxo.</span>
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16 flex flex-col gap-3 text-left md:mt-16 md:flex-row md:items-end md:justify-between">
        <span className="coord reveal reveal-delay-3">
          curitiba, br · © {new Date().getFullYear()}
        </span>
        <div className="log-entry reveal reveal-delay-4">
          <span className="timestamp">[sis]</span>
          <span className="ml-2">feito com código e intenção</span>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
