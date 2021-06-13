import React from 'react';
import { Wheel } from 'react-custom-roulette';
import dummyPrizes from '../assets/dummyPrizes.json';

const dummyData = dummyPrizes
  .map((prize) => ({ option: prize.name }))
  .slice(0, 5);

const Roulette: React.FC = () => (
  <>
    <Wheel
      mustStartSpinning
      prizeNumber={3}
      data={dummyData}
      outerBorderWidth={0}
      radiusLineColor="#536789"
      radiusLineWidth={3}
      fontSize={15}
      perpendicularText
      backgroundColors={[`#F3F6FA`]}
      textColors={[`#002350`]}
    />
  </>
);

export default Roulette;
