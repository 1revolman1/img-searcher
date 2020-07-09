import React, { useState, useRef, useEffect } from "react";
import { StyledCard, StyledInformation, StyledExpand } from "./styled";
export default function Index(props) {
  const { id, previewURL, largeImageURL } = props.data;
  const [bigShow, setBigShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const img = useRef();
  return (
    <StyledCard
      className={bigShow ? "bigShow" : "smallShow"}
      key={`Unique${id}`}
    >
      <img
        ref={img}
        src={bigShow ? largeImageURL : previewURL}
        alt=""
        onLoad={(e) => {
          console.log(e, img.current.complete);
        }}
      />
      <StyledInformation className="opened">
        <div
          className="circle-plus closed"
          onClick={() => {
            console.log(props.data);
            // if (!localStorage.getItem("favourite"))
            //   localStorage.setItem("favourite", []);
            //   [...JSON.parse(localStorage.getItem("favourite")), ...props.data]
            // localStorage.setItem(
            //   "favourite",
            //   JSON.stringify([
            //     ...JSON.parse("favourite", localStorage.getItem("favourite")),
            //     ...props.data,
            //   ])
            // );
          }}
        >
          <div className="circle">
            <div className="horizontal"></div>
            <div className="vertical"></div>
          </div>
        </div>
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
