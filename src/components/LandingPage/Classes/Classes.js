import React from "react";
import "./Classes.css";
import dance from "../../../assets/dancer.png";
import sing from "../../../assets/musician.png";
import aerobics from "../../../assets/zumba.png";

const Classes = () => {
  return (
    <div className="class-section">
      <div className="container class-area">
        <h1
          style={{
            fontWeight: "bold",
            color: "hotpink",
          }}
        >
          Các lớp học <br /> bao gồm
        </h1>
        <div className="class-icons">
          <div className="class-icon">
            <img src={dance} alt="dance" />
            <h6>Nhảy</h6>
          </div>
          <div className="class-icon">
            <img src={sing} alt="sing" />
            <h6>Hát múa</h6>
          </div>
          <div className="class-icon">
            <img src={aerobics} alt="aerobics" />
            <h6>Aerobics</h6>
          </div>
        </div>
      </div>
      <div className="TV-area">
        <div>
          <div className="tv-border">
            <div className="screen-border"></div>
            <div className="channel-dial"></div>
            <div className="volume-dial"></div>

            <span className="socket-1"></span>
            <span className="socket-2"></span>
            <span className="socket-3"></span>

            <span className="speaker"></span>
            <span className="speaker-2"></span>
            <span className="speaker-3"></span>
            <span className="make"></span>
            <div className="screen-border-2"></div>
            <canvas id="tv-screen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
