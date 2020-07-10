import React, { useState, useEffect, useRef } from "react";
import Image from "../../components/Image";
import { StyledHeaderBlock, StyledImgContainer } from "./styled";
export default function Favourite() {
  const [query, setQuery] = useState([]);
  useEffect(() => {
    setQuery(JSON.parse(localStorage.getItem("favourite")));
  }, []);
  return (
    <>
      <StyledHeaderBlock>
        <h1>Favourite</h1>
      </StyledHeaderBlock>
      <StyledImgContainer>
        {query.length > 0 &&
          query.map((image, index) => {
            return <Image key={`${index}KeyElement${image.id}`} data={image} />;
          })}
      </StyledImgContainer>
    </>
  );
}
