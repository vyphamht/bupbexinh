import Axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const [message, setMessage] = useState("");
  const submitEmail = (e) => {
    e.preventDefault();
    Axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: { name, email, phone, concern, message },
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
    setEmail("");
    setConcern("");
    setMessage("");
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Liên hệ</h1>
      <p>(*) mục cần điền</p>
      <form onSubmit={submitEmail} method="POST">
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label>Tên *</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label> E-mail (nếu có)</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <label>Về vấn đề *</label>
            <select
              className="form-control"
              type="select"
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              required
            >
              <option></option>
              <option>Book show</option>
              <option>Thông tin chung</option>
              <option>Đối tác</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label>Tin nhắn *</label>
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

export default Contact;
