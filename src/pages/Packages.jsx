import "./Packages.css";

const packagesData = [
  {
    id: 1,
    title: "Goa Beach Vacation",
    price: "₹12,999",
    img: "/assets/goa.jpg",
    description: "3 Nights & 4 Days — Beach tours, water sports, and nightlife."
  },
  {
    id: 2,
    title: "Ladakh Adventure Trip",
    price: "₹15,499",
    img: "/assets/ladakh.jpg",
    description: "4 Nights & 5 Days — Snow mountains, trekking, river rafting."
  },
  {
    id: 3,
    title: "Dubai Premium Tour",
    price: "₹48,999",
    img: "/assets/dubai.jpg",
    description: "3 Nights & 4 Days — Desert safari, Burj Khalifa, city tour."
  }
];

const Packages = () => {
  return (
    <div className="packages-container">
      <h1>Best Travel Packages</h1>
      <div className="packages-grid">
        {packagesData.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.img} alt={pkg.title} />
            <h2>{pkg.title}</h2>
            <p>{pkg.description}</p>
            <h3>{pkg.price}</h3>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
