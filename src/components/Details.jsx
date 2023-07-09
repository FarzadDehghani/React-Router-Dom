import { useNavigate, useParams } from "react-router-dom";
import { data } from "../DB/data";
import NotFound from "./NotFound";
import "../assets/css/details.css";
import "../assets/css/notFound.css";

export const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const item = data.find((item) => item.id === Number(params.id));
  const handleNavigate = () => {
    navigate(-1);
  };
  if (!item?.id) {
    return <NotFound />;
  }
  const link = item?.imageLink;
  const header = item?.header;
  const price = item?.price;
  const description = item?.description;
  return (
    <div className="details-container">
      <div className="details__card">
        <img className="details__image" src={link} />
        <div className="details--position">
          <div className="details__content">
            <h3>{header}</h3>
            <p>{price}</p>
            <p>{description}</p>
          </div>
          <button className="details__button" onClick={handleNavigate}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
      </div>
    </div>
  );
};