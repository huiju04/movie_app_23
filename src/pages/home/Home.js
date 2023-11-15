import styled from "styled-components";
import { nowPlaying } from "../../api";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import "swiper/css";
import { ShowMovie } from "./ShowMovie";
import { PacmanLoader } from "react-spinners";

export const Home = () => {
  //1. 마운트시 api에 요청
  // 2.비동기 통신
  // 3.예외 처리

  const [nowPlayingData, setNowPlayingData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowPlayingData(results);
        setIsLoading(false);
      } catch (error) {
        console.log("에러:" + error);
      }
    })();
  }, []);

  console.log(nowPlayingData);

  return (
    <>
      {isLoading ? (
        <PacmanLoader color="orange" />
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <Banner data={nowPlayingData[0]} />

              <ShowMovie movieData={nowPlayingData} />
            </>
          )}
        </div>
      )}
    </>
  );
};
