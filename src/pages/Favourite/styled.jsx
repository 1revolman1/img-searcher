import styled from "styled-components";

export const StyledHeaderBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid red;
  width: 80%;
  margin: 0 auto;
  & > div:not(.bigShow) {
    margin: 20px;
  }
`;
