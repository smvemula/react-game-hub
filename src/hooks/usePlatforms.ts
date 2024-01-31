import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { Platform } from "./useGames";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms
})

//({data: platforms, isLoading: false, error: null}) //useData<Platform>("/platforms/lists/parents");

export default usePlatforms;