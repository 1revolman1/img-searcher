import React, { useState, useEffect, useRef } from "react";
import {
  StyledCard,
  StyledInformation,
  StyledExpand,
  StyledInfavourite,
} from "./styled";
export default function Index(props) {
  const { id, previewURL, largeImageURL } = props.data;
  const [bigShow, setBigShow] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const img = useRef();
  useEffect(() => {
    const parsedLocalStorage = JSON.parse(localStorage.getItem("favourite"));
    let found =
      parsedLocalStorage.filter((element) => {
        return element.id === props.data.id;
      }).length > 0;
    found && setFavourite(true);
    return () => {
      setFavourite(false);
    };
  }, [props.data.id]);
  const addToFavourite = function () {
    const parsedLocalStorage = JSON.parse(localStorage.getItem("favourite"));
    if (favourite) {
      // УДАЛИТЬ ИЗ ИЗБРАННОГо
      localStorage.setItem(
        "favourite",
        JSON.stringify(
          parsedLocalStorage.filter((element) => {
            return element.id !== props.data.id;
          })
        )
      );
    } else {
      //ДОБАВИТЬ В ИЗБРАННОЕ
      localStorage.setItem(
        "favourite",
        JSON.stringify([...parsedLocalStorage, props.data])
      );
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
