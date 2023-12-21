import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
const ItemsList = ({ data }) => {
       //Dispatch an action 
       const dispatch = useDispatch();
        const handleAddItems = (item)=>{   
            dispatch(addItem(item));
        }
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-white shadow-lg" onClick={()=>handleAddItems(item)}> Add+</button>
            </div>
            <img src={IMG_CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
