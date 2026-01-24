import { useEffect, useRef, useCallback, useState } from 'react';

interface SectionNode {
  id: string;
  label: string;
  y: number; // scroll position
  active: boolean;
}

interface FlowParticle {
  id: number;
  fromSection: string;
  toSection: string;
  x: number;
  y: number;
  targetY: number;
  speed: number;
  opacity: number;
  side: 'left' | 'right';
}

const SECTIONS = [
  { id: 'hero', label: 'início' },
  { id: 'work', label: 'projetos' },
  { id: 'clients', label: 'empresas' },
  { id: 'feedbacks', label: 'feedbacks' },
  { id: 'lab', label: 'laboratório' },
  { id: 'about', label: 'sobre' },
  { id: 'contact', label: 'contato' },
];

const NetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<FlowParticle[]>([]);
  const animationRef = useRef<number>();
  const scrollRef = useRef(0);
  const currentSectionRef = useRef(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const getSectionPositions = useCallback(() => {
    return SECTIONS.map((section, index) => {
      const element = document.getElementById(section.id);
      return {
        ...section,
        y: element?.offsetTop || index * window.innerHeight,
        active: false,
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setDimensions({ width: canvas.width, height: canvas.height });
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      
      // Determine current section
      const sections = getSectionPositions();
      const viewportMiddle = scrollRef.current + window.innerHeight * 0.4;
      
      let newSection = 0;
      sections.forEach((section, index) => {
        if (viewportMiddle >= section.y) {
          newSection = index;
        }
      });
      
      // Spawn particles when changing sections
      if (newSection !== currentSectionRef.current) {
        spawnSectionFlow(currentSectionRef.current, newSection);
        currentSectionRef.current = newSection;
      }
    };

    const spawnSectionFlow = (fromIdx: number, toIdx: number) => {
      const direction = toIdx > fromIdx ? 1 : -1;
      
      // Choose one side only - cleaner
      const side: 'left' | 'right' = Math.random() > 0.5 ? 'left' : 'right';
      
      // Fewer, slower particles
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const startY = scrollRef.current + window.innerHeight * 0.3;
          const endY = startY + direction * window.innerHeight * 0.5;
          
          particlesRef.current.push({
            id: Date.now() + i,
            fromSection: SECTIONS[fromIdx]?.label || 'início',
            toSection: SECTIONS[toIdx]?.label || 'início',
            x: side === 'left' 
              ? 40 + Math.random() * 30 
              : canvas.width - 40 - Math.random() * 30,
            y: startY + i * 40,
            targetY: endY,
            speed: 0.8 + Math.random() * 0.4,
            opacity: 0.6,
            side,
          });
        }, i * 150);
      }
    };

    const spawnAmbientParticle = () => {
      if (particlesRef.current.length > 8) return;
      
      const side = Math.random() > 0.5 ? 'left' : 'right';
      const direction = Math.random() > 0.5 ? 1 : -1;
      const viewportY = scrollRef.current;
      
      particlesRef.current.push({
        id: Date.now(),
        fromSection: '',
        toSection: '',
        x: side === 'left' ? 45 : canvas.width - 45,
        y: viewportY + Math.random() * canvas.height,
        targetY: viewportY + Math.random() * canvas.height + direction * 250,
        speed: 0.3 + Math.random() * 0.3,
        opacity: 0.25,
        side,
      });
    };

    const animate = () => {
      // Clear fully to avoid trails/smears
      ctx.fillStyle = 'rgb(18, 18, 20)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const scroll = scrollRef.current;

      // Occasionally spawn ambient particles - less frequent
      if (Math.random() > 0.99) {
        spawnAmbientParticle();
      }

      // Draw single vertical guide line on left edge only (minimal)
      ctx.strokeStyle = 'rgba(40, 40, 45, 0.2)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 8]);
      ctx.beginPath();
      ctx.moveTo(45, 0);
      ctx.lineTo(45, canvas.height);
      ctx.stroke();
      ctx.setLineDash([]);
      
      ctx.setLineDash([]);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Move towards target
        const direction = particle.targetY > particle.y ? 1 : -1;
        particle.y += particle.speed * direction;
        
        // Slight horizontal drift
        particle.x += (Math.random() - 0.5) * 0.3;
        
        // Fade out as approaching target
        const progress = Math.abs(particle.y - (particle.targetY - direction * 300)) / 300;
        const fadeOpacity = particle.opacity * Math.min(1, Math.max(0, 1 - progress * 0.5));
        
        // Check if done
        if ((direction > 0 && particle.y >= particle.targetY) || 
            (direction < 0 && particle.y <= particle.targetY)) {
          particle.opacity = 0;
        }
        
        // Adjust Y for scroll (particles move with viewport conceptually)
        const drawY = particle.y - scroll;
        
        // Only draw if in viewport
        if (drawY > -50 && drawY < canvas.height + 50 && fadeOpacity > 0.05) {
          // Simple trail line
          const trailLength = 25 + particle.speed * 10;
          const gradient = ctx.createLinearGradient(
            particle.x, drawY - direction * trailLength,
            particle.x, drawY
          );
          gradient.addColorStop(0, 'rgba(230, 193, 90, 0)');
          gradient.addColorStop(1, `rgba(230, 193, 90, ${fadeOpacity * 0.4})`);
          
          ctx.beginPath();
          ctx.moveTo(particle.x, drawY - direction * trailLength);
          ctx.lineTo(particle.x, drawY);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Small packet head
          ctx.fillStyle = `rgba(230, 193, 90, ${fadeOpacity * 0.7})`;
          ctx.fillRect(particle.x - 1.5, drawY - 1.5, 3, 3);
          
          // Section label - only for transition particles, clean
          if (particle.toSection && fadeOpacity > 0.3) {
            ctx.font = '9px "IBM Plex Mono", monospace';
            ctx.textAlign = particle.side === 'left' ? 'left' : 'right';
            ctx.fillStyle = `rgba(230, 193, 90, ${fadeOpacity * 0.5})`;
            const labelX = particle.side === 'left' ? particle.x + 8 : particle.x - 8;
            ctx.fillText(`→ ${particle.toSection}`, labelX, drawY + 3);
          }
        }
      });

      // Clean up finished particles
      particlesRef.current = particles.filter(p => p.opacity > 0.05);

      // Draw current section indicator on the edge
      const currentSection = SECTIONS[currentSectionRef.current];
      if (currentSection) {
        // Left side indicator
        ctx.font = '9px "IBM Plex Mono", monospace';
        ctx.textAlign = 'left';
        ctx.fillStyle = 'rgba(100, 100, 105, 0.4)';
        ctx.save();
        ctx.translate(15, canvas.height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(`${String(currentSectionRef.current).padStart(2, '0')} — ${currentSection.label}`, 0, 0);
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    ctx.fillStyle = 'rgb(18, 18, 20)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [getSectionPositions]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: '#121214' }}
    />
  );
};

export default NetworkCanvas;
