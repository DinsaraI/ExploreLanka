import "bootstrap/dist/css/bootstrap.min.css";
import galleface from "../assets/galleface.jpg";
import colombo7 from "../assets/colombo7.jpg";
import anuradhapura from "../assets/anuradhapura.jpg";
import pettah from "../assets/pettah.jpg";
import "./fetured.css";

const destinations = [
  {
    title: "GALLE FACE",
    description: "Seaside promenade in Colombo, Sri Lanka.",
    image: galleface,
    style: { height: "380px", width: "100%", objectFit: "cover" },
  },
  {
    title: "COLOMBO 7",
    description: "Upscale neighborhood in Colombo, Sri Lanka.",
    image: colombo7,
    style: { height: "400px", width: "100%", objectFit: "cover" },
  },
  {
    title: "ANURADHAPURA",
    description: "Ancient stupa in Anuradhapura, Sri Lanka.",
    image: anuradhapura,
    style: { height: "500px", width: "100%", objectFit: "cover" },
  },
  {
    title: "PETTAH",
    description: "Bustling market district in Colombo, Sri Lanka.",
    image: pettah,
    style: { height: "400px", width: "150%", objectFit: "cover" },
  },
];

const FeaturedDestinations = () => {
  return (
    <div className="container mt-2">
      <h2 className="fw-bold">EXPLORE SRI LANKA</h2>
      <p className="mb-4">CHECK OUT SOME FEATURED DESTINATIONS IN SRI LANKA</p>
      <div className="d-flex flex-wrap gap-3 justify-content-start`">
        {destinations.map((place, idx) => (
          <div
            key={idx}
            style={{
              width: place.width,
              margin: "10px 5px", // or margin: "10px 15px" for vertical/horizontal
            }}
          >
            <div className="card h-100 border-0 shadow-none">
              <img
                src={place.image}
                className="card-img-top image-hover "
                alt={place.title}
                style={place.style}
              />

              <div className="card-body">
                <h5 className="card-title fw-bold">{place.title}</h5>
                <p className="card-text">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestinations;
