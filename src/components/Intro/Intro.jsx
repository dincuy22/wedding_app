import React from "react";

import { images } from "../../constants";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="bg-intro">
      <div className="intro">
        <h1>THE WEDDING OF</h1>
        <img src={images.intro} alt="" width={350} />
        <h2>Adiba & Habib</h2>
        <p>Kami berharap Anda menjadi bagian dari hari istimewa kami.</p>
        <div className="timer">
          {["hari", "jam", "menit", "detik"].map((item) => (
            <div className={item} key={item}>
              <span className="digit">57</span>
              <span>hari</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
