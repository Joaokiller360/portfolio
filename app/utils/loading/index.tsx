'use client';

import { useEffect } from 'react';

interface FullScreenLoaderProps {
  loading: boolean;
}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({ loading }) => {
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
        <p className="mt-4 animate-pulse text-lg text-white">Cargando...</p>
      </div>
    </div>
  );
};

export default FullScreenLoader;
