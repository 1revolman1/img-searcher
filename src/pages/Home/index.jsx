import React, { useState, useEffect, useRef } from "react";
import {
  ControlPanelDiv,
  StyledInput,
  StyledCounter,
  ImgBar,
  ImgBarContainer,
  GoogleWrapper,
  DownloadNew,
} from "./styled";
import Image from "../../components/Image";
import useFavouriteLogic from "../../userHooks/localstorage";
import StackGrid from "react-stack-grid";

const key = "17361687-a101acdabc6a7719b500f899f";

export default function Home() {
  const text = useRef(null);
  const ammounOfQueries = useRef(0);
  const currentPage = useRef(1);
  const nowData = useRef([]);
  const [query, setQuery] = useState({ text: "", posts: [] });
  const localStore = useFavouriteLogic([]);
  const doSearching = function (text, page) {
    if (query.text !== text) {
      currentPage.current = 1;
    } else {
      currentPage.current = page + 1;
    }
    fetch(
      `https://pixabay.com/api/?key=${key}&q=${text}&image_type=photo&pretty=true&page=${currentPage.current}`
    )
      .then((res) => res.json())
      .then((Newposts) => {
        ammounOfQueries.current = Newposts.total;
        nowData.current = Newposts.hits;
        if (query.text !== text) {
          setQuery({ text, posts: Newposts.hits });
        } else {
          setQuery({ text, posts: [...query.posts, ...Newposts.hits] });
        }
      });
  };

  return (
    <GoogleWrapper className="page-google">
      <form
        id="form"
        onSubmit={(event) => {
          event.preventDefault();
          doSearching(text.current, currentPage.current);
        }}
      >
        <ControlPanelDiv>
          <StyledInput
            onInput={(event) => {
              text.current = event.target.value;
            }}
            type="text"
          />

          <StyledCounter>
            <span>{ammounOfQueries.current ? ammounOfQueries.current : 0}</span>
          </StyledCounter>
        </ControlPanelDiv>
      </form>
      <ImgBar>
        <ImgBarContainer>
          {query.posts.length > 0 &&
            query.posts.map((element, index) => {
              return (
                <Image
                  key={`${index}KeyElement${element.id}`}
                  data={element}
                  localstore={localStore}
                />
              );
            })}
        </ImgBarContainer>
      </ImgBar>
      {query.posts.length > 10 && nowData.current.length > 0 && (
        <DownloadNew>
          <button
            onClick={() => {
              doSearching(text.current, currentPage.current);
            }}
          >
            Загрузить еще!
          </button>
        </DownloadNew>
      )}
    </GoogleWrapper>
  );
}
