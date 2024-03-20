import React from "react";

const Intro = () => {
  return (
    <div
      className="flex items-center justify-center 
                    flex-col text-center pt-20 pb-6"
    >
      <h1
        className="text-4xl md:text-7xl dark:text-white 
                     mb-1 md:mb-3 font-bold"
      >
        Zhuoyuan (Geo) Li
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Game Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Hello, I'm Zhuoyuan (Geo) Li, a dedicated Computer Science graduate
        student at Northwestern University with a specialization in Artificial
        Intelligence. I'm actively seeking software engineering internships,
        leveraging my strong background in software development and backend
        management. My experience includes working on web development projects
        during internships and engaging in research where I applied AI models to
        detect adversarial attacks. I am passionate about continuous learning
        and am always eager to acquire new skills to become a proficient
        programmer. In my free time, I collaborate with friends to develop video
        games. I welcome opportunities to connect, share knowledge, and further
        my expertise in both software and video game development. Let's explore
        and learn together!
      </p>
    </div>
  );
};

export default Intro;
