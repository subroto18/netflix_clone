import React, { Fragment, useEffect, useState } from "react";
import {
  LOGO,
  AVATAR,
  VIDEO_LIST_API,
  VIDEO_SEARCH_API,
} from "../../utilis/helper";
import { RootState } from "../../utilis/store";
import { FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";

import { TiTimes } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import {
  updateIsSearch,
  updateSearchValue,
  updateSearchLoading,
  updateSearchResult,
  updateSearchErrorStatus,
} from "../../utilis/searchSlice";

import {
  updateLoadingStatus,
  updateVideoData,
  updateErrorStatus,
} from "../../utilis/videosSlice";
import { NavBar } from "./NavBar";
export const Header: React.FC = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const isSearch = useSelector((state: RootState) => state.search.isSearch);

  const searchValue = useSelector(
    (state: RootState) => state.search.searchValue
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let time = setTimeout(() => {
      debounce();
    }, 200);

    return () => {
      clearTimeout(time);
    };
  }, [searchValue]);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  // sticky header

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? setSticky(true) : setSticky(false);
  };

  // get searching video

  const debounce = async () => {
    let searchApi = VIDEO_SEARCH_API(searchValue);
    if (searchValue !== "") {
      try {
        dispatch(updateSearchLoading(true));
        let data = await fetch(searchApi);
        let json = await data.json();
        dispatch(updateSearchLoading(false));
        dispatch(
          updateSearchResult({
            [searchValue]: json.results,
          })
        );
        dispatch(updateVideoData(json.results));
      } catch (error: unknown) {
        dispatch(updateSearchLoading(false));
        dispatch(updateSearchErrorStatus(true));
      }
    }
  };

  // get initial load video

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

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value !== "") {
      dispatch(updateSearchValue(e.currentTarget.value));
    } else {
      getVideos();
      dispatch(updateSearchValue(""));
    }
  };

  const hideSearchBar = (): void => {
    dispatch(updateSearchValue(""));
    dispatch(updateIsSearch(false));
    getVideos();
    window.scroll(0, 0);
  };

  const showSearchBar = (): void => {
    dispatch(updateIsSearch(true));
    window.scroll(0, 0);
  };

  return (
    <div
      className={`${
        sticky ? "fixed bg-black" : "absolute"
      }   top-00 left-0 right-0 z-[60] h-200 w-full`}
    >
      <div>
        <div className="flex justify-between m-auto w-[97%]">
          <div className="flex">
            <div>
              <img src={LOGO} alt="logo" className="h-20" />
            </div>

            <div className="relative md:hidden">
              <div className="flex h-30 items-center text-white">
                <TiArrowSortedDown
                  onClick={() => setToggle(!toggle)}
                  className={`absolute top-[2rem] cursor-pointer ${
                    toggle ? "" : "rotate-180"
                  } `}
                />
              </div>

              <div
                className={`${
                  toggle ? "block" : "hidden"
                } absolute bg-black w-[200px] h-auto left-[0rem] top-[4rem] shadow-lg rounded`}
              >
                <ul className="items-center p-5 text-white divide-y divide-gray-400">
                  <NavBar></NavBar>
                </ul>
              </div>
            </div>

            <div className="hidden lg:block">
              <ul className="flex items-center  h-20  text-white">
                <NavBar></NavBar>
              </ul>
            </div>
          </div>

          <div className="flex h-30 items-center text-white">
            {isSearch ? (
              <div className="relative">
                <input
                  onChange={(e) => handleChange(e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 pr-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Title, People, Genre"
                />
                <TiTimes
                  onClick={hideSearchBar}
                  className="absolute top-3 text-black right-2 cursor-pointer"
                />
              </div>
            ) : (
              <FiSearch
                onClick={showSearchBar}
                className="mx-2 cursor-pointer"
              />
            )}

            <p className=" mx-2">Children</p>
            <BsBell className=" mx-2" />
            <img src={AVATAR} alt="avatar" className="h-6" />
            <TiArrowSortedDown className=" mr-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
