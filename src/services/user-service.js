import { myAxios } from "./helper";

export const signUp=(customer)=>
{
    return myAxios.post("/api/v1/auth/register",customer).then((response)=>response.data);

}