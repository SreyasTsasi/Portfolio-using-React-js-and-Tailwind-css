import React from 'react';
import Ecommerce2 from '../assets/Ecommerce2.png';
import clone from '../assets/clone.png';
import luxuryrides from '../assets/luxuryrides.png';
import Plantirrigation from '../assets/Plantirrigation.png';

const Portfolio = () => {
  const portfolios = [
    { id: 1, name:  'Ecommerce', src: Ecommerce2 },
    { id: 2, name: 'Netflix clone', src: clone },
    { id: 3, name: 'Luxury Rides Project', src: luxuryrides },
    { id: 4, name: 'Plant Irrigation System', src: Plantirrigation },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, name, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-lg duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <p className="text-lg font-bold mb-2">{name}</p>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
