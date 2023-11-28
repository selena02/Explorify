// AboutUs.tsx
import Card from "./Card";
import "../AboutUs.css";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import image from "../assets/about-image.jpg";

const AboutUs = () => {
  const cardData = [
    {
      title: "Seamless Stays",
      content:
        "Find and book the perfect stay effortlessly from our global selection of hotels.",
      imageUrl: `${card1}`,
      icon: "hotel",
    },
    {
      title: "Destinations",
      content: "Explore new destinations with our comprehensive travel guide.",
      imageUrl: `${card2}`,
      icon: "explore",
    },
    {
      title: "Travel Tribe",
      content:
        "Connect with fellow travelers and share experiences in our vibrant community",
      imageUrl: `${card3}`,
      icon: "groups",
    },
  ];

  return (
    <>
      <div className="about-container">
        <div className="cards-container">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              imageUrl={card.imageUrl}
              icon={card.icon}
            />
          ))}
        </div>
        <div className="about-title-container">
          <h1 className="about-title">Trusted by many people</h1>
        </div>
        <div className="about-content-container">
          <img src={image} alt="Image with globe" className="about-image" />
          <div className="description-table">
            <div className="text">
              <span className="pink-text">Explorify </span>
              is the to-go choice for hassle-free travel planning. From airfare
              and accomodations to activities and transportation, we've got you
              covered. Book with confidence knowing that our team of experts is
              here to help you every step of the way
              <span className="pink-text"> .</span>
            </div>
            <div className="stats-container">
              <div className="stat">
                <div className="number">70+</div>
                <div className="label">Total Destinations</div>
              </div>
              <div className="stat">
                <div className="number">10M+</div>
                <div className="label">Tourism per Year</div>
              </div>
              <div className="stat">
                <div className="number">150+</div>
                <div className="label">Luxury Hotel</div>
              </div>
              <div className="stat">
                <div className="number">12+</div>
                <div className="label">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
