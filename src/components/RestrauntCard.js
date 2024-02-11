import { useContext } from "react";
import UserContext from "../utils/userContext";
import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  locality,
  id,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-56 h-80 p-2 m-2 shadow-lg overflow-hidden">
      <div className="h-full flex flex-col justify-between">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          className="w-full h-40 object-cover"
          alt={name}
        />
        <div className="flex flex-col">
          <h2 className="font-bold text-xl">{name}</h2>
          <h3>{cuisines?.join(", ")}</h3>
          <h4>{avgRating} stars</h4>
     
        </div>
      </div>
    </div>
  );
};

export default RestrauntCard;
