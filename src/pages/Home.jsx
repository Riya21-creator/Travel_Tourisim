import "./Home.css";
import { FaPlane, FaHotel, FaGlobeAsia, FaCar } from "react-icons/fa";
import { useState } from "react";
import { useRef } from "react";



function Home() {
  const trackRef = useRef(null);
   // ✅ AI States
  const [budget, setBudget] = useState(5000);
  const [travelType, setTravelType] = useState("Solo");
  const [response, setResponse] = useState("");

  const handleAI = async () => {
  console.log("Button Clicked ✅");

  try {
    const res = await fetch("http://localhost:5000/ai-trip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        budget,
        travelType,
      }),
    });

    const data = await res.json();
    console.log("Response:", data);
    setResponse(data.result);
  } catch (error) {
    console.error("Error:", error);
    setResponse("Something went wrong. Please try again.");
  }
};


  const nextSlide = () => {
    trackRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  const prevSlide = () => {
    trackRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };
  

  return (
    <div className="home">
      {/* ⭐ HERO SECTION (SHOULD BE FIRST) */}
        <section
           className="hero"
           style={{
                 backgroundImage: `url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e")`
         }}
>
         <h1>Discover Your Next Adventure</h1>
         <p>Explore destinations, plan your trips, and enjoy your journey.</p>
         <button className="hero-btn">Start Your Trip</button>
         </section>
        
        {/* Booking Section*/}
        <section className="booking-section">
        <h1 className="dream-title">Plan Your Dream Trip</h1>
        <div className="booking-box">
          <input type="text" placeholder="Where to?" />
          <input type="date" />
          <input type="number" min="1" placeholder="Travelers" />
          <button>Search</button>
  </div>
</section>
          {/* 🤖 AI TRIP PLANNER */}
        <section className="ai-planner">
        <h2>AI Trip Planner</h2>

        <input
          type="range"
          min="1000"
          max="20000"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <p>Budget: ₹{budget}</p>

        <select
          value={travelType}
          onChange={(e) => setTravelType(e.target.value)}
        >
          <option>Solo</option>
          <option>Family</option>
          <option>Couple</option>
          <option>Friends</option>
        </select>

        <br /><br />

        <button type="button" onClick={handleAI}>
        Plan with AI
        </button>

        <pre style={{ textAlign: "left", marginTop: "20px" }}>
          {response}
        </pre>
      </section>


       

       {/* 🌍 POPULAR DESTINATIONS */}
      <section className="section">
  <h2>Popular Destinations</h2>

  <div className="carousel-container">

    <div className="carousel-track" ref={trackRef}>


  <div className="carousel-card">
  <img src="/udaipur.jpg" alt="Udaipur" />
  <h3>Udaipur</h3>
</div>

<div className="carousel-card">
  <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6" alt="Goa" />
  <h3>Goa</h3>
</div>

<div className="carousel-card">
  <img src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33" alt="Jaipur" />
  <h3>Jaipur</h3>
</div>

{/* ⭐ New Added Manali Card */}
<div className="carousel-card">
  <img src="https://images.unsplash.com/photo-1551632811-561732d1e306" alt="Manali" />
  <h3>Manali</h3>
</div>

  <div className="carousel-card">
  <img
    src="https://images.unsplash.com/photo-1551334787-21e6bd3ab135"
    alt="Kashmir"
  />
  <h3>Kashmir</h3>
</div>


  
  <div className="carousel-card">
  <img
    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    alt="Andaman Islands"
  />
  <h3>Andaman Islands</h3>
  </div>



    </div>

    {/* Buttons */}
    <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
    <button className="carousel-btn next" onClick={nextSlide}>❯</button>

  </div>
</section>


      {
      /* WHY CHOOSE US */}
      <section className="why">
      <h2>Why Choose Us?</h2>
      <ul>
            <li><FaPlane /> Affordable travel packages</li>
            <li><FaHotel /> 24/7 hotel & booking support</li>
            <li><FaGlobeAsia /> Customized travel plans</li>
            <li><FaCar /> Airport pickup & guidance</li>
      </ul>
      </section>
      {/*Travel Packages Section*/}
       <section className="packages">
  <h2>Top Travel Packages</h2>

  <div className="package-list">

    <div className="package-card">
      <img src="/rameshwaram.jpg" alt="Rameshwaram" />
      <h3>Rameshwaram</h3>
      <p>₹45,000 / 5 Days</p>
      <button>Book Now</button>
    </div>

    <div className="package-card">
      <img src="/mizoram.jpg" alt="Mizoram" />
      <h3>Mizoram</h3>
      <p>₹30,000 / 4 Days</p>
      <button>Book Now</button>
    </div>

    <div className="package-card">
      <img src="/dal_lake.jpg" alt="Dal Lake" />
      <h3>Dal Lake</h3>
      <p>₹22,000 / 6 Days</p>
      <button>Book Now</button>
    </div>

  </div>
</section>



      {/* FOOTER */}
      <footer>
        <p>© 2025 Travel & Tourism · All Rights Reserved</p>
      </footer>
      <section className="newsletter">
      <h2>Subscribe for Travel Deals & Discounts</h2>
      <div>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
      </div>
      </section>

    </div>
  );
}

export default Home;

