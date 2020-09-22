import Axios from "axios";
import React, { useState } from "react";

const RegisterClass = () => {
  const [name, setName] = useState("");
  const [kid, setKid] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [group, setGroup] = useState("");
  const [message, setMessage] = useState("");
  const submitEmail = (e) => {
    e.preventDefault();
    Axios({
      method: "POST",
      url: "http://localhost:5000/register",
      data: { name, kid, age, phone, group, message },
    }).then((res) => {
      if (res.data.status === "success") {
        alert("Message sent.");
        resetForm();
      } else if (res.data.status === "fail") {
        alert("Message fail to send.");
      }
    });
  };
  const resetForm = () => {
    setName("");
    setPhone("");
    setKid("");
    setAge("");
    setGroup("");
    setMessage("");
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Đăng kí lớp học</h1>
      <p>(*) mục cần điền</p>
      <form onSubmit={submitEmail} method="POST">
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label>Tên phụ huynh *</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label>Tên bé *</label>
            <input
              type="text"
              className="form-control"
              value={kid}
              onChange={(e) => setKid(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label>Tuổi của bé *</label>
            <input
              type="text"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label>Số điện thoại *</label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Lớp học bé muốn tham gia là:</label>
            <select
              className="form-control"
              type="select"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              required
            >
              <option></option>
              <option>Lớp Nhảy hiện đại </option>
              <option>Lớp Hát Múa</option>
              <option>Lớp Aerobics</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label>Lời nhắn *</label>
            <textarea
              type="textarea"
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          className="btn btn-secondary col-md-12 mb-3 "
          type="submit"
          style={{ padding: "3px" }}
        >
          Gửi
        </button>
      </form>
    </div>
  );
};

export default RegisterClass;
