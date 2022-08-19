import axios from "axios";

const Customer_API_BASE_URL="http://localhost:9090/api/customers/";

class CustomerService{
   getCustomer(){
    return axios.get(Customer_API_BASE_URL);
   }
}
export default new CustomerService;