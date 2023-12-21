import RestaurantCard,{withpromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlIneStatus";
const BodyComponent = () => {
  const [listOfRestaurant, setlistOFRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const RestaurantCardPromoted =withpromotedLabel(RestaurantCard);
  //Whenever state variables updates,react triggers a reconciliation cycle (re-renders the component).
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6155722&lng=77.3467996&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    let restaurantData =
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
    setlistOFRestaurant(restaurantData);
    setFilteredRestaurants(restaurantData);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks Like yu Internet connection is not working please try agian...
      </h1>
    );
  }
  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="body">
        <div className="filter">
          <div className="m-4 p-4">
            <input
              type="text"
              className="border border-solid border-black"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="p-4 bg-green-100 m-4 px-4 py-2"
              onClick={() => {
                const filteredRestaurant = listOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>
          <div>
            <button
              className="px-4 py-2 bg-gray-100 flex item-center"
              onClick={() => {
                const filteredLsit = listOfRestaurant.filter(
                  (res) => res.info.avgRating > 4.2
                );
                setlistOFRestaurant(filteredLsit);
              }}
            >
              Top Rated restaurant
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.promotted?<RestaurantCardPromoted resData={restaurant} />:<RestaurantCard resData={restaurant} />}
              
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default BodyComponent;
