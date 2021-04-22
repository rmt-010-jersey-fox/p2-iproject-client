const server = "https://wwtbamquiz.herokuapp.com";

import axios from "axios";
export default axios.create({
    baseURL:server
})
