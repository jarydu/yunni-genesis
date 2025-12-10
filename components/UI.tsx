import React from 'react';
import { Link } from 'react-router-dom';

// --- Buttons ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', to, children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-brand-primary";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-sky-500 shadow-lg shadow-sky-500/30",
    secondary: "bg-brand-secondary text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/30",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

// --- Section Wrappers ---

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export const SectionHeader: React.FC<{ 
  titleCN: string; 
  titleEN: string; 
  subtitleCN?: string; 
  subtitleEN?: string; 
  align?: 'left' | 'center' 
}> = ({ titleCN, titleEN, subtitleCN, subtitleEN, align = 'center' }) => (
  <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2 tracking-tight">
      {titleCN}
    </h2>
    <p className="text-lg text-brand-primary font-bold uppercase tracking-wider mb-6">
      {titleEN}
    </p>
    {(subtitleCN || subtitleEN) && (
      <div className="max-w-3xl mx-auto space-y-2 text-brand-muted">
        {subtitleCN && <p>{subtitleCN}</p>}
        {subtitleEN && <p className="text-sm opacity-80">{subtitleEN}</p>}
      </div>
    )}
  </div>
);

// --- Cards ---

export const Card: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = '', hoverEffect = true }) => (
  <div className={`bg-brand-surface border border-slate-200 rounded-xl p-6 md:p-8 overflow-hidden relative ${hoverEffect ? 'hover:border-brand-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : 'shadow-sm'} ${className}`}>
    {children}
  </div>
);

export const FeatureCard: React.FC<{ icon?: React.ReactNode; titleCN: string; titleEN: string; descCN: string; descEN: string }> = ({ icon, titleCN, titleEN, descCN, descEN }) => (
  <Card className="h-full flex flex-col">
    {icon && <div className="mb-6 text-brand-primary">{icon}</div>}
    <h3 className="text-xl font-bold text-brand-text mb-1">{titleCN}</h3>
    <p className="text-xs font-semibold text-brand-secondary uppercase mb-4 tracking-wide">{titleEN}</p>
    <p className="text-brand-muted mb-2 flex-grow">{descCN}</p>
    <p className="text-slate-400 text-sm">{descEN}</p>
  </Card>
);

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
    {children}
  </span>
);