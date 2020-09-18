import React from "react";
import "./MusicLibrary.css";
import ReactPlayer from "react-player";

const MusicLibrary = () => {
  return (
    <div className="music-library">
      <h1 style={{ textAlign: "center" }}>Thư Viện Media</h1>
      <div className="music">
        <div className=" mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <div className="card-img">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=nyGw5TJZk3Y"
                  className="react-player"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="music-item">
          <div className="player-wrapper">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=nyGw5TJZk3Y"
              className="react-player"
              width="100%"
              height="100%"
            />
          </div>
          <h3>Quê Em Mùa Gặt</h3>
          <p>
            Chương trình 100 giây rực rỡ do Đài Truyên Hình Việt Nam tổ chức.
          </p>
        */}
      </div>
    </div>
  );
};

export default MusicLibrary;
