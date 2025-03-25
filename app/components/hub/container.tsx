import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="relative w-full mx-auto p-6 bg-secondary rounded-2xl shadow-xl backdrop-blur-md bg-opacity-90 border-2 border-white/30">
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl pointer-events-none" />
      {children}
    </div>
  );
}
