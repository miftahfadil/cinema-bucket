import { compile } from "tailwindcss";
import httpClient from "../libs/api";

const baseApi = '/posts';

const testPost = async () => {
    const response = await httpClient.get(baseApi);
    
    return response;
}

export default testPost;