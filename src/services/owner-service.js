import axios from "axios";

const OWNER_API_BASE_URL="http://localhost:9090/api/owner/";

class OwnerService{
   getOwner(){
    return axios.get(OWNER_API_BASE_URL);
   }
}
export default new OwnerService;