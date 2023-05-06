import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utilis/store";

import { ColorRing } from "react-loader-spinner";
import { showModal } from "../../utilis/appSlice";
import { IMAGE_API_URL } from "../../utilis/helper";

export const Modal: React.FC = () => {
  const loading = useSelector((state: RootState) => state.videoDetails.loading);
  const apiError = useSelector((state: RootState) => state.videoDetails.error);
  const videoDetailsData = useSelector(
    (state: RootState) => state.videoDetails.data
  );

  let title: any;
  let description: any;
  let thumbnail: any;
  let vote_average: any;
  let release_date: any;

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.app.modal);

  const hideModal = () => {
    dispatch(showModal(false));
  };

  title = videoDetailsData?.original_title;
  description = videoDetailsData.overview;

  thumbnail = IMAGE_API_URL + videoDetailsData.poster_path;

  vote_average = videoDetailsData.vote_average;
  release_date = videoDetailsData.release_date;

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 " onClose={hideModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto mt-[5rem]">
          <div className="flex min-h-full  items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div>
                  {loading ? (
                    <div className="h-[15rem] flex justify-center items-center">
                      <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={[
                          "#e15b64",
                          "#f47e60",
                          "#f8b26a",
                          "#abbd81",
                          "#849b87",
                        ]}
                      />
                    </div>
                  ) : apiError ? (
                    <div className="h-[15rem] flex justify-center items-center">
                      <h1 className="text-red-800 text-2xl">
                        Something went wrong!
                      </h1>
                    </div>
                  ) : (
                    <div>
                      <div className="w-[100%] h-[20rem] sm:w-[15rem] sm:h-[15rem] mb-3 sm:mb-0 md:mb-0 lg:mb-0  rounded auto float-left mr-3">
                        <img
                          src={thumbnail}
                          alt="poster"
                          className="w-[100%] h-[100%] rounded"
                        />
                      </div>
                      <div>
                        <h1 className="text-1xl sm:text-2xl  font-bold mb-2 pt-1">
                          {title}
                        </h1>
                        <p className="mb-3">
                          <span className="text-sm  mr-2">Release Date:</span>
                          <span className="font-bold">{release_date}</span>
                        </p>

                        <p className="text-sm text-slate-600 mb-3">
                          {description}
                        </p>
                        <div className="flex justify-between">
                          <p className="mt-2">
                            <span className="text-sm mr-2">Rating:</span>
                            <span className="font-bold">{`${vote_average.toFixed(
                              2
                            )} /10.0`}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
