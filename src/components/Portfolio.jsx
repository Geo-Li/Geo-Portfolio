import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map(project => (
            <PortfolioItem 
                title={project.title}
                imgURL={project.imgURL}
                stack={project.stack}
                link={project.link}
            />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
