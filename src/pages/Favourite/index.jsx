import React from "react";
import Image from "../../components/Image";
import useFavouriteLogic from "../../userHooks/localstorage";
import { StyledHeaderBlock, StyledImgContainer } from "./styled";
export default function Favourite() {
  const localStore = useFavouriteLogic([]);
  const [localstore] = localStore;
  return (
    <>
      <StyledHeaderBlock>
        <h1>Favourite</h1>
      </StyledHeaderBlock>
      <StyledImgContainer>
        {localstore.length > 0 &&
          localstore.map((image, index) => {
            return (
              <Image
                key={`${index}KeyElement${image.id}`}
                data={image}
                localstore={localStore}
              />
            );
          })}
      </StyledImgContainer>
    </>
  );
}
