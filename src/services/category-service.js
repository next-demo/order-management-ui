import axios from "axios";

const Category_API_BASE_URL="http://localhost:9090/api/category/";

class CategoryService{
   getCategory(){
    return axios.get(Category_API_BASE_URL);
   }
}
export default new CategoryService;