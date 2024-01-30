//import useData from "./useData";
import platforms from "../data/platforms";
//import { Platform } from "./useGames";

const usePlatforms = () => ({data: platforms, isLoading: false, error: null}) //useData<Platform>("/platforms/lists/parents");

export default usePlatforms;