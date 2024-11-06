import React from 'react';
import { STATE_IMAGES } from '../data/stateImages';

interface StateImageProps {
  state: string;
  className?: string;
}

export default function StateImage({ state, className = '' }: StateImageProps) {
  const imageUrl = STATE_IMAGES[state];

  if (!imageUrl) return null;

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      <img
        src={imageUrl}
        alt={state}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white text-xl font-bold">{state}</h3>
      </div>
    </div>
  );
}