import React from "react";

import { Acara, Cover, Galeri, Intro, Mempelai, Ucapan } from "./components";

const App = () => {
  return (
    <div className="container">
      <Cover />
      <Intro />
      <Mempelai />
      <Acara />
      <Galeri />
      <Ucapan />
    </div>
  );
};

export default App;
