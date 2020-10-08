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
    </div>
  );
};

export default Classes;
