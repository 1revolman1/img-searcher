import styled from "styled-components";
export const GoogleWrapper = styled.div`
  /* overflow-y: scroll;
  height: 100vh; */
  /* position: absolute;
  top: 0; */
`;
export const ControlPanelDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const StyledInput = styled.input`
  width: 70%;
  padding: 10px;
  font-size: 1.5rem;
`;
export const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  padding: 15px;
  span {
    text-align: center;
  }
`;
export const ImgBar = styled.div`
  width: 90%;
  margin: 0 auto;
  }
`;
export const ImgBarContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 74%;
  &:empty {
    display: none;
  }
`;
export const DownloadNew = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    color: rgba(0, 0, 0, 0.87);
    padding: 6px 16px;
    font-size: 0.875rem;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    background-color: #1976d2;
    outline: none;
    border: none;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    background-color: #1976d2;
    &:hover {
      background-color: rgb(17, 82, 147);
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
  }
`;
