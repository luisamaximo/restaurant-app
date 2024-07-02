'use client';

import React, { useState } from 'react';
import './booking.css';

export default function Booking() {
  const intialState = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    message: '',
  };

  const [text, setText] = useState(intialState);
  console.log(text);

  const handleTextChange = (e: Event | any) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value});
  };

  const handleSubmitBooking = () => {
    sessionStorage.setItem("name", text.name)
    sessionStorage.setItem("email", text.email)
    sessionStorage.setItem("phone", text.phone)
    sessionStorage.setItem("date", text.date)
    sessionStorage.setItem("time", text.time)
    sessionStorage.setItem("people", text.people)
    sessionStorage.setItem("message", text.message)
    sessionStorage.setItem("test", "test")
  }

  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <h1>Book Now!</h1>

        <form
          className="booking-form"
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <input
                type="text"
                name="name"
                value={text.name}
                className="form-control"
                placeholder="Your Name"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                value={text.email}
                placeholder="Your Email"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="text"
                className="form-control"
                name="phone"
                value={text.phone}
                placeholder="Your Phone"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="date"
                name="date"
                className="form-control"
                value={text.date}
                placeholder="Date"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="time"
                className="form-control"
                name="time"
                value={text.time}
                placeholder="Time"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="number"
                className="form-control"
                name="people"
                value={text.people}
                placeholder="# of people"
                onChange={handleTextChange}
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              value={text.message}
              rows={5}
              placeholder="Message"
              onChange={handleTextChange}
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" onClick={handleSubmitBooking}>Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
}
