import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd0cd6fd364bb4c29963690c780046317'
    }
})