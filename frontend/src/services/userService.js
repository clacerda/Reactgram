import {api, requestConfig} from "../utils/config";

// Get user Details
const profile = async(data, token) => {
    const config = requestConfig("GET", data, token);

    try {
        const res = await fetch(api + "/users/profile", config)
                            .then((res) => res.json())
                            .catch((error) => error);
        return res;

    } catch (error) {
        
    }
}

const userService = {
    profile
}

export default userService;