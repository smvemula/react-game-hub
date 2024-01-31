import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
//import useData from "./useData";
import apiClient, { FetchResponse } from "../services/api-client";

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

const useGames = (gameQuery: GameQuery) => useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClient.get<FetchResponse<Game>>("/games", { params: {genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id, ordering: gameQuery.sort, search: gameQuery.search}}).then(res => res.data.results),
    staleTime: 1 * 60 * 1000, // 1 minute
})


//useData<Game>("/games", { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sort, search: gameQuery.search}}, [gameQuery]);

export default useGames;