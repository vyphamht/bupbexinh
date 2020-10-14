import React from "react";
import "./Classes.css";
import dance from "../../../assets/dancer.png";
import sing from "../../../assets/musician.png";
import aerobics from "../../../assets/zumba.png";
import ReactPlayer from "react-player";

const Classes = () => {
  return (
    <div className="class-section">
      <div className="container class-area">
        <h1
          style={{
            fontWeight: "bold",
            color: "#f26d4d",
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
      <div className="container">
        <div className="TV-area">
          <div className="bubble-bg">
            <div className="bubble-1"></div>
            <div className="bubble-2"></div>
            <div className="bubble-3"></div>
          </div>
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
              <div id="tv-screen" wrapper="true">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=hS5CfP8n_js"
                  className="react-player"
                  width="100%"
                  height="100%"
                  playing
                  loop
                  muted
                  config={{
                    youtube: {
                      playerVars: { showInfo: 0 },
                    },
                  }}
                ></ReactPlayer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
