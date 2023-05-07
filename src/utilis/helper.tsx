export let LOGO: string;
export let AVATAR: string;
export let PRIVATE_KEY: string;
export let VIDEO_API: string;
export let VIDEO_LIST_API: string;
export let IMAGE_API_URL: string;

let API_HOST: string;

export let PRINT_RANDOM_MOVIE_ID: () => number;

export let SLUG: (query: string) => string;

export let VIDEO_SEARCH_API: (query: string) => string;

export let VIDEO_DETAILS_API: (query: unknown) => string;

API_HOST = "https://api.themoviedb.org/3";

let MOVIES_ID: number[];

IMAGE_API_URL = "https://image.tmdb.org/t/p/w500";

MOVIES_ID = [
  28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770,
  10752,
];

PRINT_RANDOM_MOVIE_ID = () => {
  return MOVIES_ID[Math.floor(Math.random() * MOVIES_ID.length)];
};

SLUG = (query) => {
  return query
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "+")
    .replace(/^-+|-+$/g, "");
};

VIDEO_SEARCH_API = (query) => {
  return `${API_HOST}/search/movie?api_key=${PRIVATE_KEY}&query=${SLUG(query)}`;
};

VIDEO_DETAILS_API = (videoId) => {
  return `${API_HOST}/movie/${videoId}?api_key=${PRIVATE_KEY}`;
};

LOGO = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png";

AVATAR = "https://image.pngaaa.com/218/2494218-middle.png";

PRIVATE_KEY = "b4282666575cff2e0c3570baa69cfbb4";

VIDEO_API = `${API_HOST}/movie/${PRINT_RANDOM_MOVIE_ID()}?api_key=${PRIVATE_KEY}`;

VIDEO_LIST_API = `${API_HOST}/discover/movie?api_key=${PRIVATE_KEY}&page=1`;

export type videoData = {
  backdrop_path?: string;
  original_title?: string;
  poster_path?: string;
  overview?: string;
  vote_average?: number;
  id?: number;
};
