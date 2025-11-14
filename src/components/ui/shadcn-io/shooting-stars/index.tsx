'use client';

import { cn } from "@/libs/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface StaticStar {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
  maxShootingStars?: number;
  staticStarCount?: number;
}

const getRandomStartPoint = () => {
  if (typeof window === 'undefined') {
    return { x: 0, y: 0, angle: 45 };
  }
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
  maxShootingStars = 2,
  staticStarCount = 100,
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const [staticStars, setStaticStars] = useState<StaticStar[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  // Initialize static stars
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const stars: StaticStar[] = [];
    for (let i = 0; i < staticStarCount; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }
    setStaticStars(stars);

    const handleResize = () => {
      const newStars: StaticStar[] = [];
      for (let i = 0; i < staticStarCount; i++) {
        newStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      setStaticStars(newStars);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [staticStarCount]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const createStar = () => {
      setStars((prev) => {
        // Limit the number of shooting stars
        if (prev.length >= maxShootingStars) {
          // Still schedule next attempt even if at max
          const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
          timeoutId = setTimeout(createStar, randomDelay);
          return prev;
        }
        
        const { x, y, angle } = getRandomStartPoint();
        const newStar: ShootingStar = {
          id: Date.now() + Math.random(),
          x,
          y,
          angle,
          scale: 1,
          speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          distance: 0,
        };
        
        const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
        timeoutId = setTimeout(createStar, randomDelay);
        
        return [...prev, newStar];
      });
    };

    createStar();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay, maxShootingStars]);

  useEffect(() => {
    let animationFrameId: number;
    const moveStars = () => {
      setStars((prevStars) => {
        if (prevStars.length === 0) return prevStars;
        return prevStars
          .map((star) => {
            const newX =
              star.x +
              star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY =
              star.y +
              star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 100;
            if (
              typeof window === 'undefined' ||
              newX < -20 ||
              newX > window.innerWidth + 20 ||
              newY < -20 ||
              newY > window.innerHeight + 20
            ) {
              return null;
            }
            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              scale: newScale,
            };
          })
          .filter((star): star is ShootingStar => star !== null);
      });
      animationFrameId = requestAnimationFrame(moveStars);
    };

    animationFrameId = requestAnimationFrame(moveStars);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0", className)}
    >
      {/* Static stars */}
      {staticStars.map((star, index) => (
        <circle
          key={`static-${index}`}
          cx={star.x}
          cy={star.y}
          r={star.size}
          fill="white"
          opacity={star.opacity}
        />
      ))}
      {/* Shooting stars */}
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ))}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0.3 }} />
          <stop
            offset="50%"
            style={{ stopColor: trailColor, stopOpacity: 0.7 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
