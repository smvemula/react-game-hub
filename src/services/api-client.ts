import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd0cd6fd364bb4c29963690c780046317'
    }
})

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

class APIClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    get = (requestConfig?: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, requestConfig).then(res => res.data.results)
    }
}

export default APIClient;