import React from 'react'

export function Button({ className = '', variant, ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-2xl text-sm font-bold transition focus:outline-none focus:ring disabled:opacity-50 disabled:pointer-events-none';
  const styles =
    variant === 'outline'
      ? 'border border-white/20 bg-black/30 text-white hover:bg-white/10'
      : 'bg-white text-black hover:opacity-90';
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}

export default Button;

