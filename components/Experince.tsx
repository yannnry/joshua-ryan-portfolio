import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { LinkPreview } from "./ui/LinkPreview";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-cyan-400">work experience</span>
      </h1>

      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {workExperience.map((card) => (
          <LinkPreview
            key={card.id}
            url={card.url} // Use the URL from the data  from (index.ts) file
            className="font-bold"
          >
            <Button
              // Random duration for the border animation
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
              className="text-black dark:text-white border-neutral-200 dark:border-slate-800 flex flex-col h-full"
            >
              <div className="flex items-center p-3 py-6 md:p-5 lg:p-8 h-full">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-24 md:w-20 w-16"
                />
                <div className="ml-5 text-left">
                  <h1 className="text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-sm text-neutral-500">{card.companyName}</p>
                  <p className="text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          </LinkPreview>
        ))}
      </div>
    </div>
  );
};

export default Experience;
