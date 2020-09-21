import React, { useState, useEffect } from "react";
import { db } from "../../constant/firebaseConfig";
import "./MusicLibrary.css";
import ReactPlayer from "react-player";

const MusicLibrary = () => {
  const [musicItem, setMusicItem] = useState([]);
  useEffect((e) => {
    const getMusicItem = db
      .collection("media-library")
      .onSnapshot((snapshot) => {
        const allItems = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        setMusicItem(allItems);
      });
    return () => {
      getMusicItem();
    };
  }, []);
  const list = musicItem.map((item) => {
    return (
      <div className="music container" key={item.id}>
        <div className=" mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <div className="card-img">
                <ReactPlayer
                  url={item.media}
                  className="react-player"
                  width="100%"
                  height="100%"
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                      origin: "http://localhost:3000",
                    },
                  }}
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.desc}</p>
                <p className="card-text">
                  {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="music-library">
      <h1 style={{ textAlign: "center" }}>Thư Viện Media</h1>
      {list}
    </div>
  );
};

export default MusicLibrary;
