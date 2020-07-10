import React, { useState, useEffect, useRef } from "react";
import {
  StyledCard,
  StyledInformation,
  StyledExpand,
  StyledInfavourite,
} from "./styled";
export default function Index(props) {
  const { id, previewURL, largeImageURL } = props.data;
  const [localstore, setLocalStore] = props.localstore;
  const [bigShow, setBigShow] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const img = useRef();
  useEffect(() => {
    let found =
      localstore.filter((element) => {
        return element.id === id;
      }).length > 0;
    found && setFavourite(true);
    return () => {
      setFavourite(false);
    };
  }, [id, localstore]);
  const addToFavourite = function () {
    let result;
    if (favourite) {
      // УДАЛИТЬ ИЗ ИЗБРАННОГо
      result = localstore.filter((element) => {
        return element.id !== id;
      });
      localStorage.setItem("favourite", JSON.stringify(result));
      setLocalStore(result);
    } else {
      //ДОБАВИТЬ В ИЗБРАННОЕ
      result = [...localstore, props.data];
      localStorage.setItem("favourite", JSON.stringify(result));
      setLocalStore(result);
    }
    setFavourite(!favourite);
  };
  return (
    <StyledCard className={bigShow ? "bigShow" : "smallShow"}>
      <img ref={img} src={bigShow ? largeImageURL : previewURL} alt="" />
      <StyledInformation className="opened">
        <StyledInfavourite
          className={favourite ? "opened" : "closed"}
          onClick={addToFavourite}
        >
          <div className="circle">
            <div className="horizontal"></div>
            <div className="vertical"></div>
          </div>
        </StyledInfavourite>
        <StyledExpand
          className={bigShow ? "expanded" : "minified"}
          onClick={() => {
            setBigShow(!bigShow);
          }}
        >
          <img src={require("./assets/expand-svgrepo-com.svg")} alt="" />
        </StyledExpand>
      </StyledInformation>
    </StyledCard>
  );
}
