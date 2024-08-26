import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading p-4">
        Kinds words from
        <span className="text-cyan-400"> Satisfied Collaborators</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        {/* div section that shows all the companies that I work with
            removed for a while since I haven't work with many companies.
            It's ugly to put only one, it's like there's a lost or astray
            image floating on the website. Yuck.*/}
        {/* <div className="flex flex-wrap  items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
          {companies.map(({ id, name, img, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Clients;
