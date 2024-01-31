import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import apiClient from "../services/api-client";

export interface Genre {
    id: number,
    name: string,
    image_background: string
}

//const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: genres
})

//({data: genres, isLoading: false, error: null})//useData<Genre>("/genres");

export default useGenres;