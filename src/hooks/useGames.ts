import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";

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

const useGames = (gameQuery: GameQuery) => {
    const fetchGames = ({pageParam = 1}) => apiClient.get({
        params: { 
            genres: gameQuery.genreId,
            platforms: gameQuery.platformId,
            ordering: gameQuery.sort,
            search: gameQuery.search,
            page: pageParam,
        }
    })

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: fetchGames,
        staleTime: 1 * 60 * 1000, // 1 minute
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        }
    })
        
}

//useData<Game>("/games", { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sort, search: gameQuery.search}}, [gameQuery]);

export default useGames;