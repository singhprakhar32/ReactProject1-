const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData.info;
  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

//Heigher Component 
//input as the restraunt card ==>> restaurant card Promoted 
export const withpromotedLabel = (RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;