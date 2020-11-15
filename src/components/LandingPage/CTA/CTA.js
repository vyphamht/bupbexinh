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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9fd4b0"
          fill-opacity="1"
          d="M0,192L40,176C80,160,160,128,240,144C320,160,400,224,480,208C560,192,640,96,720,69.3C800,43,880,85,960,128C1040,171,1120,213,1200,213.3C1280,213,1360,171,1400,149.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9fd4b0"
          fill-opacity="1"
          d="M0,160L40,176C80,192,160,224,240,208C320,192,400,128,480,128C560,128,640,192,720,186.7C800,181,880,107,960,96C1040,85,1120,139,1200,144C1280,149,1360,107,1400,85.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default CTA;
