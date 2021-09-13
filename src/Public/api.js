import axios from "axios";

const api = axios.create({
	baseURL: "https://rvnx1y65w8.execute-api.us-east-2.amazonaws.com/"
})

export default api