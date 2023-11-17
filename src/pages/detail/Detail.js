import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { IMG_URL } from "../../constants";

const Container = styled.div`
  padding: 100px 150px 150px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 100px 5%;
  }
`;

const Bg = styled.div`
  width: 40%;
  height: 700px;
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 500px;
  }
`;

const Con = styled.div`
  width: 55%;
  font-size: 20px;
  padding-top: 50px;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

const Rated = styled.div`
  font-weight: 400;
`;

const Genres = styled.ul`
  margin: 20px 0;
  li {
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;

const Release = styled.div`
  margin-bottom: 20px;
`;

const Runtime = styled.div``;

const Desc = styled.p`
  max-width: 70%;
  width: 100%;
  margin-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 50px;
  opacity: 0.7;
  line-height: 2em;
  font-weight: 300;
  @media screen and (max-width: 450px) {
    max-width: 100%;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        console.log(data);
        setDetailData(data);
        setLoading(false);
      } catch (error) {
        console.log("Error: " + error);
      }
    })();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Bg $bgUrl={detailData.backdrop_path} />
          <Con>
            <Title>{detailData.title}</Title>
            <Rated>평점 {Math.round(detailData.vote_average)}점</Rated>
            <Genres>
              {detailData.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </Genres>
            <Release>{detailData.release_date}</Release>
            <Runtime>런타임 {detailData.runtime}분</Runtime>
            <Desc>{detailData.overview}</Desc>
          </Con>
        </Container>
      )}
    </div>
  );
};
