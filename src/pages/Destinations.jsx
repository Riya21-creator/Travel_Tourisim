import "./Destinations.css";

function Destinations() {
  const destinationData = [
  {
    id: 1,
    name: "Lakshadweep",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: "₹40,000",
  },
  {
    id: 2,
    name: "Goa",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6",
    price: "₹15,000",
  },
  {
    id: 3,
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
    price: "₹10,000",
  },
  {
    id: 4,
    name: "Kashmir",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: "₹20,000",
  }
];

  return (
    <div className="dest-container">
      <h1 className="dest-title">Popular Destinations</h1>
      <div className="dest-grid">
        {destinationData.map((dest) => (
          <div className="dest-card" key={dest.id}>
            <img src={dest.image} alt={dest.name} />
            <h3>{dest.name}</h3>
            <p>Starting from <span>{dest.price}</span></p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
