import React from "react";
import { Poster } from "../components/body/Poster";
import { VideoContainer } from "../components/body/VideoContainer";
import { Header } from "../components/header/Header";
import { RootState } from "../utilis/store";
import { useSelector } from "react-redux";

export const Home = () => {
  const isSearch = useSelector((state: RootState) => state.search.isSearch);

  return (
    <>
      <Header />
      {!isSearch && <Poster />}
      <VideoContainer></VideoContainer>
    </>
  );
};
