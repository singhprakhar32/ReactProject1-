import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants.js";
const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const jsonData = await data.json();
    setResInfo(jsonData);
  };
  return resInfo;
};
export default useRestrauntMenu;
