import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd0cd6fd364bb4c29963690c780046317'
    }
})

export interface FetchResponse<T> {
    count: number;
    results: T[];
}
/*
class APIClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    get() {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint)
        .then((res) => res.data.results)
    }
}

export default APIClient;*/