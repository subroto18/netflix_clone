import React, { useLayoutEffect } from "react";
import { VideoContainer } from "../components/body/VideoContainer";
import { Header } from "../components/header/Header";
import { ComingSoon } from "../components/body/ComingSoon";
import { RootState } from "../utilis/store";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
export const Maintainance: React.FC = () => {
  const isSearch = useSelector((state: RootState) => state.search.isSearch);
  const location = useLocation();
  useLayoutEffect(() => {
    window && window.scroll(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      {!isSearch && <ComingSoon />}
      <VideoContainer></VideoContainer>
    </>
  );
};
