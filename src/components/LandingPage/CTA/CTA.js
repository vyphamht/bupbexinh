import React from "react";
import { Link } from "react-router-dom";
import dance from "../../../assets/singing-kid.png";
import "./CTA.css";
const CTA = () => {
  return (
    <div id="CTA-section">
      <div className="cta-area container">
        <div className="desc">
          <h2>Sân chơi cho các bé thiếu nhi với độ tuổi từ 5 đến 16.</h2>
          <br />
          <h4>Tăng khả năng dạn dĩ, tạo dựng sự tự tin ở trẻ</h4>
          <br />
          <div className="cta-btn">
            <Link className="btn" to="/register">
              Đăng ký lớp
            </Link>
            <Link className="btn" to="/contact">
              Liên hệ
            </Link>
          </div>
        </div>
        <div className="illu">
          <img src={dance} alt="illu" />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id="wave1">
        <path
          fill="#b8e2de"
          fill-opacity="1"
          d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,218.7C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="main-message">
        <div className="container">
          <h2>
            Các lớp học của câu lạc bộ búp bê xinh sẽ giúp trẻ{" "}
            <span className="promo-hightlight">tự tin toả sáng</span> trên các
            sân khấu nhà trường và sóng truyền hình.
          </h2>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id="wave2">
        <path
          fill="#b8e2de"
          fill-opacity="1"
          d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,128C672,139,768,213,864,229.3C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default CTA;
