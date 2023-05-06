import React from "react";
import { VideoContainer } from "../components/body/VideoContainer";
import { Header } from "../components/header/Header";
import { ComingSoon } from "../components/body/ComingSoon";
export const Maintainance: React.FC = () => {
  return (
    <>
      <Header />
      <ComingSoon />
      <VideoContainer></VideoContainer>
    </>
  );
};
