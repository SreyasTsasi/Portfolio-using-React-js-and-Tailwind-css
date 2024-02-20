import React from 'react';

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"> About</p>
        </div>
        <p className="text-xl mt-20">
          I have a diverse range of interests and passions that span across technology and entrepreneurship...
          I am constantly seeking out new challenges and opportunities to learn and grow in these areas.
          I have experience in web development, and I am also interested in exploring emerging fields
          like machine learning, blockchain, UI-UX designing, and cloud computing. I believe that these areas play an increasingly important role in shaping the future of technology. I am excited about the prospect of working for a company and gaining real-world experience that will help me further
          develop my skills and expertise. Overall, I am
          a highly motivated and driven individual who
          is eager to tackle new challenges and make
          a meaningful impact in the world of technology.
        </p>
      </div>
    </div>
  );
};
