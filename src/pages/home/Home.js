import styled from "styled-components";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL } from "../../constants";
import "swiper/css";
import { Link } from "react-router-dom";
import { ShowMovie } from "./ShowMovie";
import { PacmanLoader } from "react-spinners";
import { Loading } from "../../components/Loading";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export const Home = () => {
  //1. 마운트시 api에 요청
  // 2.비동기 통신
  // 3.예외 처리

  const [nowPlayingData, setNowPlayingData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowPlayingData(nowResults);

        const { results: popResults } = await popular();
        setPopData(popResults);

        const { results: topResults } = await topRated();
        setTopData(topResults);

        const { results: upResults } = await upComing();
        setUpData(upResults);

        setIsLoading(false);
      } catch (error) {
        console.log("에러:" + error);
      }
    })();
  }, []);

  // console.log(popData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <PageTitle titleName={"HOME"} />

              <Banner data={nowPlayingData[0]} />

              <Layout>
                <ShowMovie
                  titleName={"현재 상영 영화"}
                  movieData={nowPlayingData}
                />
                <ShowMovie titleName={"인기 영화"} movieData={popData} />
                <ShowMovie titleName={"평점이 높은"} movieData={topData} />
                <ShowMovie titleName={"개봉 예정 영화"} movieData={upData} />
              </Layout>
            </>
          )}
        </div>
      )}
    </>
  );
};
