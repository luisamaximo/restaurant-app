'use client'
import React, { useState } from 'react';
import './booking.css'


interface BookingFormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  people: string;
  message: string;
}

export default function Booking() {
  const initialState: BookingFormState = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    message: '',
  };

  const [text, setText] = useState(initialState);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const handleSubmitBooking = async (e: React.FormEvent<HTMLFormElement>) => {
      // Get the existing bookings from the API or initialize an empty array if none exist
    const response = await fetch('http://localhost:3001/api')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      //Transforming data from fetch (string) into a Json object
      const existingBookings: BookingFormState[] = JSON.parse(data.data)
      //Pushing the new data into our existingBookings array
      existingBookings.push(text);
      //Post request which will write our existingBookings into our booking.json file
      fetch("http://localhost:3001/api",
        {method: "POST", body: JSON.stringify(existingBookings), headers: {
          'Content-Type': 'application/json'
        }})
    })
    
    // Reset the form
    setText(initialState);
    alert('Booking submitted successfully');
  };

  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <h1>Book a table</h1>

        <form className="booking-form" onSubmit={handleSubmitBooking}>
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
            <button type="submit">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
}