
import { useEffect, useState } from 'react';

interface ConfettiAnimationProps {
  show: boolean;
  onComplete?: () => void;
}

const ConfettiAnimation = ({ show, onComplete }: ConfettiAnimationProps) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([]);

  useEffect(() => {
    if (show) {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: ['#ff6b9d', '#a855f7', '#3b82f6', '#10b981', '#fbbf24', '#f97316'][Math.floor(Math.random() * 6)],
        delay: Math.random() * 0.5
      }));
      setParticles(newParticles);

      const timer = setTimeout(() => {
        setParticles([]);
        onComplete?.();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full animate-ping"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: '2s'
          }}
        />
      ))}
      
      {/* Emoji confetti */}
      {['🎉', '🎊', '✨', '🎈', '🎁', '🧚‍♀️'].map((emoji, index) => (
        <div
          key={emoji + index}
          className="absolute text-4xl animate-bounce"
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + (index % 2) * 20}%`,
            animationDelay: `${index * 0.2}s`,
            animationDuration: '2s'
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

export default ConfettiAnimation;
