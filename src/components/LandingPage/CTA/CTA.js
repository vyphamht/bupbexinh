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
      <div className="main-message">
        <div className="container">
          <h2>
            Các lớp học của câu lạc bộ búp bê xinh sẽ giúp trẻ{" "}
            <span className="promo-hightlight">tự tin toả sáng</span> trên các
            sân khấu nhà trường và sóng truyền hình.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CTA;
