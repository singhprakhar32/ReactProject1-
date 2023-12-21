import { LOGO_URL } from "../utils/constants";
import { useState ,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlIneStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Title = () => {
  return (
    <img
      alt="logo"
      className="w-32 h-32" 
      src={LOGO_URL}
    ></img>
  );
};

const HeaderComponent = () => {
  const [btnNameReact,setBtnNameReact] = useState("Login");
  useEffect(() => {},[btnNameReact])
  const onlineStatus = useOnlineStatus()
  const data = useContext(UserContext)
  const cartItems = useSelector((store)=>store.cart.items);
    return (
      <>
         <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
          <Title />
          <div className="flex items-center">
            <ul className="flex p-4 m-4">
              <li className="px-4">Online Status:{onlineStatus?"🟢":"🔴"}</li>
              <li className="px-4"><Link to="/">Home</Link></li>
              <li className="px-4"><Link to="about">About</Link> </li>
              <li className="px-4"> <Link to="contactus">Contact Us</Link></li>
              <li className="px-4 font-bold"><Link to="cart">Cart</Link> ({cartItems.length} items)</li>
              <button className="login" onClick={()=>{
                btnNameReact ==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
              }}>{btnNameReact}</button>
              <li className="px-4 font-bold">{data.name}</li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  export default HeaderComponent;