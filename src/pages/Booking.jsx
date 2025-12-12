import { useState } from "react";
import "./Booking.css";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    persons: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Successful! We will contact you soon.");
    console.log(form);
  };

  return (
    <div className="booking-container">
      <h1>Plan Your Trip</h1>
      <p>Fill out the form below and start your journey with us ✈️</p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <select name="destination" onChange={handleChange} required>
          <option value="">Select Destination</option>
          <option value="Maldives">Maldives</option>
          <option value="Goa">Goa</option>
          <option value="Dubai">Dubai</option>
          <option value="Manali">Manali</option>
          <option value="Jaipur">Jaipur</option>
        </select>

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="persons"
          placeholder="No. of Persons"
          onChange={handleChange}
          required
        />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;
