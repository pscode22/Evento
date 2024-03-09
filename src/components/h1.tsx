import React from 'react';

export default function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl font-bold tracking-tight lg:text-6xl">{children}</h1>;
}
