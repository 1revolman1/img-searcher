import { useState, useEffect } from "react";

export default function useFavouriteLogic(props = []) {
  const [localStore, setLocalStore] = useState(props);

  useEffect(() => {
    !localStorage.getItem("favourite") &&
      localStorage.setItem("favourite", JSON.stringify([]));
    setLocalStore(JSON.parse(localStorage.getItem("favourite")));
  }, []);

  return [localStore, setLocalStore];
}
