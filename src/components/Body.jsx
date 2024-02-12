import RestrauntCard from "./RestrauntCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const isOnline = useOnline();
  const {user}=useContext(UserContext)
  useEffect(() => {
    getAllRestaurant();
  }, []);

  const getAllRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.927532&lng=76.2638427&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const settingRes =
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants;

    setAllRestaurants(settingRes);
    setFilteredRestaurants(settingRes);
  };

  if (!isOnline) {
    return <h2>somthing went wrong .check your interner!!</h2>;
  }
  if (!allRestaurants){
 
    return null; //early return;
  } 

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 my-5  bg-pink-50">
        <input
        data-testid="input"
          className="search-input"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
              <button
              data-testid='search-btn'
          className="btn-search m-2 p-1 bg-purple-900 text-white rounded-md hover:bg-purple-600"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
       
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap" data-testid='resList'>
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant Found!!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {" "}
                <RestrauntCard {...restaurant.info}  />{" "}
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
