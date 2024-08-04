import React from "react";

const ProfileBadges = () => {
  return (
    <div
      className="flex items-center justify-center text-black dark:text-white 
      border-2 border-black dark:border-white rounded-md p-2 space-x-4"
    >
      <div className="flex items-center space-x-1">
        <span role="img" aria-label="computer">
          💻
        </span>
        <span className="font-semibold">Full-Stack Developer</span>
      </div>
      <span>|</span>
      <div className="flex items-center space-x-1">
        <span role="img" aria-label="game">
          🎮
        </span>
        <span className="font-semibold">Game Dev & Designer</span>
      </div>
      <span>|</span>
      <div className="flex items-center space-x-1">
        <span role="img" aria-label="robot">
          🤖
        </span>
        <span className="font-semibold">Mechatronics Enthusiast</span>
      </div>
    </div>
  );
};

const Intro = () => {
  return (
    <div
      className="flex items-center justify-center 
                 flex-col text-center pt-16 mb-4 space-y-4"
    >
      <h1
        className="text-4xl md:text-7xl dark:text-white 
                     mb-1 md:mb-3 font-semibold"
      >
        Zhuoyuan (Geo) Li
      </h1>
      <ProfileBadges />
      <p className="text-sm max-w-xl mb-6 font-semibold">
        Hey there, I'm Zhuoyuan (Geo) Li, a dedicated Computer Science graduate
        student at Northwestern University with a specialization in AI from UCI.
        I'm on the lookout for software engineering internships and full-time
        jobs. I've got a solid background in software development, including web
        dev, backend management, game dev, and AI applications. I love learning
        new things and am always up for a challenge. Recently, I've been diving
        into personal projects to sharpen my skills and create maintainable,
        real-world applications. Let's connect, share ideas, and grow together
        in the realms of software and game development!
      </p>
    </div>
  );
};

export default Intro;
