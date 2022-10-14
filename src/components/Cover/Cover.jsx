import React, { useState } from "react";
import { BiEnvelopeOpen } from "react-icons/bi";

import { images } from "../../constants";
import "./Cover.scss";

const Cover = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className={`bg-cover ${open ? "hide" : ""}`}>
      <div className="cover">
        <img src={images.cover} alt="" width={250} />
        <h1>Habib & Adiba</h1>
        <p>Kepada Bapak/Ibu/Saudara/i</p>
        <div>
          <span>
            Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.
          </span>
          <button onClick={handleClick}>
            <BiEnvelopeOpen />
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
