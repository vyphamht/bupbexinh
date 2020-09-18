import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Liên hệ</h1>
      <p>(*) mục cần điền</p>
      <form className="needs-validation" noValidate>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom01">Tên *</label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="valid-feedback">OK</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom02"> E-mail (nếu có)</label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="valid-feedback">OK</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom01">Số điện thoại *</label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <div className="valid-feedback">OK</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom02">Về vấn đề *</label>
            <select
              className="form-control"
              type="select"
              id="validationCustom02"
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              required
            >
              <option>Book show</option>
              <option>Thông tin chung</option>
              <option>Đối tác</option>
            </select>

            <div className="valid-feedback">OK</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label htmlFor="validationCustom03">Tin nhắn *</label>
            <textarea
              type="textarea"
              className="form-control"
              id="validationCustom03"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div className="invalid-feedback">Hay them tin nhan</div>
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
