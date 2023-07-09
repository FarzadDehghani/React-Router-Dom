import { useNavigate } from "react-router-dom";
import "../assets/css/card.css";

export const Card = ({ link, header, price, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}`);
  };
  return (
    <div onClick={handleClick}>
      <div className="card-container">
        <img className="card__image" src={link} />
        <h3 className="card__header">{header}</h3>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
};