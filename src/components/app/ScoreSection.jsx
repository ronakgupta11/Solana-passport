// components/ScoreSection.js
import React from 'react';
import { EvervaultCard } from '../ui/evervault-card';
import { GlareCard } from '../ui/glare-card';

const ScoreSection = ({ score }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8 bg-transparent border-gray-50 text-white shadow-md rounded-lg">
      {score ? (
        (<GlareCard className="flex flex-col items-center justify-center">
           <p className='text-white font-bold text-3xl '>{score}</p>
            <p className="text-white font-bold text-xl mt-4">Unique Humanity Score</p>
          </GlareCard>)

      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white">Humanity Score Not Available</h1>
          <p className="text-lg text-white mt-4">Add Stamps below to generate score</p>
        </div>
      )}
    </div>
  );
};

export default ScoreSection;
