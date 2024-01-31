import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: { platform: Platform}[]
    metacritic: number
    rating_top: number
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClient.get({
        params: { 
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sort,
            search: gameQuery.search
        }}),
    staleTime: 1 * 60 * 1000, // 1 minute
})


//useData<Game>("/games", { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sort, search: gameQuery.search}}, [gameQuery]);

export default useGames;