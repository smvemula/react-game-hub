//import useData from "./useData";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./useGames";
//import { Platform } from "./useGames";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms
})

//({data: platforms, isLoading: false, error: null}) //useData<Platform>("/platforms/lists/parents");

export default usePlatforms;