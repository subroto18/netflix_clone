import React from "react";
import {
  IMAGE_API_URL,
  videoData,
  VIDEO_DETAILS_API,
} from "../../utilis/helper";
import { AiFillStar } from "react-icons/ai";
import { Modal } from "./Modal";
import { showModal } from "../../utilis/appSlice";
import { useDispatch } from "react-redux";
import {
  updateDetailsLoadingStatus,
  updateDetailsData,
  updateDetailsErrorStatus,
} from "../../utilis/videoDetailsSlice";

type Props = {
  videoData: any;
  title: string;
};

export const Video = (props: Props) => {
  const dispatch = useDispatch();

  const isModalOpen = (videId: unknown) => {
    dispatch(showModal(true));
    getVideoDetails(videId);
  };

  const getVideoDetails = async (videId: unknown) => {
    dispatch(updateDetailsLoadingStatus(true));
    try {
      let data = await fetch(VIDEO_DETAILS_API(videId));
      let json = await data.json();

      if (json.success === false) {
        dispatch(updateDetailsLoadingStatus(false));
        dispatch(updateDetailsErrorStatus(true));
      } else {
        dispatch(updateDetailsData(json));
        dispatch(updateDetailsLoadingStatus(false));
        dispatch(updateDetailsErrorStatus(false));
      }
    } catch (error: unknown) {
      dispatch(updateDetailsErrorStatus(true));
    }
  };

  return (
    <div className="w-[97%] m-auto">
      <h1 className="font-bold text-white text-1xl">
        {props.title !== ""
          ? "Showing result for: " + props.title
          : "Popular Movie's"}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3   md:grid-cols-4 lg:grid-cols-6 gap-2 pt-4">
        {props.videoData.map((data: videoData) => {
          return (
            <div key={data.id} className="relative w-[100%] h-[20rem] rounded">
              <div className="h-[20rem] rounded relative group rounded">
                <img
                  src={IMAGE_API_URL + data.poster_path}
                  alt="thumbnail"
                  className="rounded h-full w-full object-center group-hover:scale-105 "
                />

                <div
                  className="absolute opacity-0 hidden rounded  left-0 right-0 top-0 bottom-0  bg-black-rgba opacity-100 duration-300  z-50 
               text-3xl text-white font-semibold group-hover:block  group-hover:scale-105 group-hover:flex group-hover:justify-center group-hover:items-center group-hover:scale-1.25 "
                >
                  <div>
                    <div className="flex text-lg">
                      <AiFillStar className="mr-2 mt-1 text-yellow-300"></AiFillStar>
                      {`${data.vote_average?.toFixed(1)}/10.0`}
                    </div>
                    <button
                      onClick={() => isModalOpen(data.id)}
                      className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Modal></Modal>
    </div>
  );
};
