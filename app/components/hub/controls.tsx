import React from 'react';
import ControlButton from './controlButton';

export default function Controls() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-text">
      <ControlButton onClick={() => console.log('Stake clicked')}>
        Stake 🍎
      </ControlButton>
      
      <ControlButton onClick={() => console.log('Leaderboard clicked')}>
        Leaderboard 🏆
      </ControlButton>
      
      <ControlButton onClick={() => console.log('Store clicked')}>
        Store 🛍️
      </ControlButton>
    </div>
  );
}
