import React, { Suspense, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Poster } from "../components/body/Poster";
import { Header } from "../components/header/Header";
import { RootState } from "../utilis/store";
import { useSelector } from "react-redux";
import { VideoEffect } from "../components/shimmerEffect/VideoEffect";
const VideoContainer: React.FC = React.lazy(
  () => import("../components/body/VideoContainer")
);

export const Home = () => {
  const isSearch = useSelector((state: RootState) => state.search.isSearch);

  const location = useLocation();
  useLayoutEffect(() => {
    window && window.scroll(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      {!isSearch && <Poster />}
      <Suspense fallback={<VideoEffect></VideoEffect>}>
        <VideoContainer></VideoContainer>
      </Suspense>
    </>
  );
};
