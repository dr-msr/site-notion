'use client';

import React from 'react';
import useScheme from 'src/hooks/useScheme';

const MountainSilhouette: React.FC = () => {
  const [scheme] = useScheme();

  // Color based on theme - dark mode more contrasting, light mode less contrasting
  const fillColor = scheme === 'dark' ? '#1a1a1a' : '#4a5568';

  return (
    <div className="hidden md:block fixed bottom-0 left-0 right-0 h-[33vh] pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 2000 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          height: '100%',
          width: '100%',
          display: 'block'
        }}
      >
        {/* Background layer - farthest mountains */}
        <path
          d="M0,400 L0,330 C100,320 150,310 250,315 C350,310 400,305 550,312 C700,308 800,300 950,310 C1100,305 1200,300 1350,308 C1500,302 1650,310 1800,305 C1900,300 1950,310 2000,315 L2000,400 Z"
          fill={fillColor}
          opacity={scheme === 'dark' ? 0.4 : 0.15}
        />
        <path
          d="M0,400 L0,350 C120,340 200,335 350,342 C500,338 650,330 800,340 C950,335 1100,332 1250,338 C1400,333 1550,340 1700,335 C1850,332 1920,338 2000,345 L2000,400 Z"
          fill={fillColor}
          opacity={scheme === 'dark' ? 0.35 : 0.12}
        />
        
        {/* Middle layer */}
        <path
          d="M0,400 L0,290 C80,275 150,270 280,275 C400,265 550,255 700,270 C850,260 1000,250 1150,265 C1300,255 1450,245 1600,260 C1750,250 1900,255 2000,270 L2000,400 Z"
          fill={fillColor}
          opacity={scheme === 'dark' ? 0.6 : 0.25}
        />
        <path
          d="M0,400 L0,310 C100,295 200,285 350,295 C500,285 650,275 800,290 C950,280 1100,270 1250,285 C1400,275 1550,265 1700,280 C1850,270 1950,275 2000,285 L2000,400 Z"
          fill={fillColor}
          opacity={scheme === 'dark' ? 0.5 : 0.2}
        />
        
        {/* Foreground layer - closest mountains with peaks */}
        <path
          d="M0,400 L0,220 C60,200 150,180 300,200 C450,175 600,160 750,185 C900,170 1050,155 1200,175 C1350,160 1500,145 1650,165 C1800,150 1900,160 2000,175 L2000,400 Z"
          fill={fillColor}
          opacity={scheme === 'dark' ? 0.8 : 0.35}
        />
        <path
          d="M0,400 L0,240 C50,220 120,205 250,225 C400,210 550,195 700,215 C850,200 1000,185 1150,205 C1300,190 1450,175 1600,195 C1750,180 1900,185 2000,200 L2000,400 Z"
          fill={fillColor}
          opacity={scheme === 'dark' ? 0.75 : 0.3}
        />
        {/* Tall peaks */}
        <path
          d="M0,400 L0,180 C40,150 120,120 250,140 C400,110 550,80 700,110 C850,85 1000,60 1150,90 C1300,65 1450,40 1600,70 C1750,50 1900,60 2000,80 L2000,400 Z"
          fill={fillColor}
          opacity={scheme === 'dark' ? 1 : 0.4}
        />
      </svg>
    </div>
  );
};

export default MountainSilhouette;

