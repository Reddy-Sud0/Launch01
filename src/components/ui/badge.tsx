import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Badge({ children, className = '', ...props }: BadgeProps) {
  return (
    <div className={`inline-flex items-center rounded-full ${className}`} {...props}>
      {children}
    </div>
  );
} 