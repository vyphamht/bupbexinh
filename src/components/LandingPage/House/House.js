import React from "react";
import "./House.css";
import placeholder from "../../../assets/placeholder.png";

const House = () => {
  return (
    <div>
      <div className="house container">
        <div className="slogans">
          <div className="numbered-slogans">
            <div className="number-slogan one">1</div>
            <h2>
              Là khung giờ{" "}
              <span className="slogan-hightlight-1">ngoại khoá</span> giúp bé
              được thoải mái sau giờ học căng thẳng
            </h2>
            <p>
              Không gian cho bé giải phóng áp lực học hành, giúp bé cân bằng cảm
              xúc và trí tuệ.
            </p>
          </div>
          <div className="numbered-slogans">
            <div className="number-slogan two">2</div>
            <h2>
              Cho bé cơ hội{" "}
              <span className="slogan-hightlight-2">khám phá bản thân</span>{" "}
              trong lĩnh vực hát múa
            </h2>
            <p>
              Các lớp học nghệ thuật múa hát đa dạng giúp bé hiểu thêm thế mạnh
              bản thân.
            </p>
          </div>
          <div className="numbered-slogans">
            <div className="number-slogan three">3</div>
            <h2>
              Xây dựng các{" "}
              <span className="slogan-hightlight-3">kĩ năng xã hội</span> cho bé
              trong một môi trường đầy năng động
            </h2>
            <p>Là môi trường cho bé kết bạn, giao lưu học hỏi và chia sẻ.</p>
          </div>
        </div>
        <img src={placeholder} alt="placeholder" />
      </div>
    </div>
  );
};

export default House;
