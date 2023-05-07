import React, { useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { VIDEO_API, IMAGE_API_URL } from "../../utilis/helper";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../utilis/store";
import {
  updatePosterData,
  updatePosterLoadingStatus,
  updateErrorStatus,
} from "../../utilis/posterSlice";
import { PosterEffect } from "../shimmerEffect/PosterEffect";
import { PosterApiError } from "../ApiError/PosterApiError";

export const Poster: React.FC = () => {
  const loading = useSelector((state: RootState) => state.poster.loading);
  const dispatch = useDispatch();
  const apiError = useSelector((state: RootState) => state.poster.error);
  const posterData = useSelector((state: RootState) => state.poster.data);

  let title: any;
  let description: any;
  let backgorund_thumbnail: any;

  useEffect(() => {
    getPosterDetails();
  }, []);

  const getPosterDetails = async () => {
    dispatch(updatePosterLoadingStatus(true));
    try {
      let data = await fetch(VIDEO_API);
      let json = await data.json();

      if (json.success === false) {
        dispatch(updatePosterLoadingStatus(false));
        dispatch(updateErrorStatus(true));
      } else {
        dispatch(updatePosterData(json));
        dispatch(updatePosterLoadingStatus(false));
        dispatch(updateErrorStatus(false));
      }
    } catch (error: unknown) {
      dispatch(updateErrorStatus(true));
    }
  };

  title = posterData?.original_title;

  description = posterData.overview?.length
    ? posterData.overview?.substring(0, 200) + "..."
    : posterData.overview;

  backgorund_thumbnail = IMAGE_API_URL + posterData.poster_path;

  return loading ? (
    <PosterEffect />
  ) : apiError ? (
    <PosterApiError />
  ) : (
    <div className="bg-slate-900 relative shadow-lh">
      <div
        className="h-[550px] md:h-[600]"
        style={{
          backgroundImage: `url("${backgorund_thumbnail}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingTop: "20rem",
        }}
      >
        <div className="bg-blend-overlay absolute bg-black-rgba left-0 right-0 top-0 bottom-0">
          <div className="items-center w-[80%] sm:w-[60%] md:w-[50%]  ml-[3rem] absolute z-50 bottom-20">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {title}
            </h1>
            <p className="text-md md:text-lg text-white">{description}</p>
            <div className="sm:flex">
              <button
                className="rounded bg-white text-black w-[100%] h-[2.5rem] pt-2 md:w-[45%]
                lg:w-[25%]
               text-center justify-center mt-4  font-bold  px-4 rounded flex mr-3"
              >
                <BsFillPlayFill className="font-2xl mt-1 mr-2 " />
                Play
              </button>

              <button
                className="rounded bg-slate-50 text-black w-[100%] h-[2.5rem] pt-2 md:w-[35%]
                lg:w-[25%]
                   text-center justify-center mt-4  font-bold p-3 px-4 rounded flex"
              >
                <AiOutlineInfoCircle className="font-2xl mt-1 mr-2" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
