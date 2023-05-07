import React, { useEffect } from "react";
import { VIDEO_LIST_API } from "../../utilis/helper";
import { Video } from "./Video";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../utilis/store";
import {
  updateLoadingStatus,
  updateVideoData,
  updateErrorStatus,
} from "../../utilis/videosSlice";
import { VideoEffect } from "../shimmerEffect/VideoEffect";
import { NotFound } from "./NotFound";

export const VideoContainer: React.FC = () => {
  const loading = useSelector((state: RootState) => state.video.loading); // while vide load for the first time
  const searchLoading = useSelector((state: RootState) => state.search.loading); // while search data fetching
  const isSearch = useSelector((state: RootState) => state.search.isSearch); // check  search bar is action or not
  const dispatch = useDispatch();
  const videoData = useSelector((state: RootState) => state.video.data);
  const searchValue = useSelector(
    (state: RootState) => state.search.searchValue
  );

  // if search

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      dispatch(updateLoadingStatus(true));
      let data = await fetch(VIDEO_LIST_API);
      let json = await data.json();
      if (json.success === false) {
        dispatch(updateLoadingStatus(false));
        dispatch(updateErrorStatus(true));
      } else {
        dispatch(updateVideoData(json.results));
        dispatch(updateLoadingStatus(false));
        dispatch(updateErrorStatus(false));
      }
    } catch (error: unknown) {
      dispatch(updateLoadingStatus(false));
      dispatch(updateErrorStatus(true));
    }
  };

  return (
    <div className="bg-black min-h-screen  py-5">
      <div className={`w-[97%] m-auto ${isSearch && "my-[5rem]"} `}>
        {isSearch ? (
          <>
            {searchLoading ? (
              <VideoEffect />
            ) : (
              <>
                {videoData.length > 0 ? (
                  <Video title={searchValue} videoData={videoData}></Video>
                ) : (
                  <NotFound></NotFound>
                )}
              </>
            )}
          </>
        ) : (
          <>
            {loading ? (
              <VideoEffect />
            ) : (
              <Video title="Popular Movie's" videoData={videoData}></Video>
            )}
          </>
        )}
      </div>
    </div>
  );
};
