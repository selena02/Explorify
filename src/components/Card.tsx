// Card.tsx
import { useState } from "react";
import "../Card.css";

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
  icon: string;
}

const Card = ({ title, content, imageUrl, icon }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardStyle = isHovered ? { opacity: 1 } : {};
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-content">
        <span id="card-icon" className="material-symbols-rounded">
          {icon}
        </span>
        <h3 className="title">{title}</h3>
        <p className="content">{content}</p>
      </div>
      <div className="card-background">
        <img style={cardStyle} src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Card;
