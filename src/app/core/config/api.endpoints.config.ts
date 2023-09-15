import { environment  as env} from "src/environments/environment";
const apiUrls = env.apiUrls;
const apiVersion = 'v1';
export const endPoints = {
    users:{
        login:`${apiUrls.userService}/${apiVersion}/users/login`,
        register:`${apiUrls.userService}/${apiVersion}/users`,
        details: (userId: number | string|null) => `${apiUrls.userService}/${apiVersion}/users/${userId}`,
        refreshToken: (userId: number | string| null) => `${apiUrls.userService}/${apiVersion}/users/${userId}/refreshToken`
    }
}