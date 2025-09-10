import React, { useState } from "react";
import { assets } from "./assets/assets";
import FaqAcccrdion from "./components/FaqAcccrdion";

const App = () => {
  return (
    <div>
      <section className="w-[100vw]">
        <picture>
          <source
            media="(min-width: 770px)"
            srcSet={assets.background_pattern_desktop}
          />
          <img
            className="w-full max-h-[40vh] object-cover"
            src={assets.background_pattern_mobile}
            alt=""
          />
        </picture>
      </section>
      <main className="w-[80%] bg-white mx-auto mb-10 -mt-30 shadow-[0_0_5px_rgba(0,0,0,0.2)] py-6 px-4 relative z-10 rounded-t-2xl">
        <header className="flex items-center gap-4 mb-5">
          <img className="w-[10%]" src={assets.icon_star} alt="icon star" />
          <h1 className="text-4xl font-bold">FAQs</h1>
        </header>
        <FaqAcccrdion />
      </main>
    </div>
  );
};

export default App;
