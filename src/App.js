import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './components/Base';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import Product from './pages/Product';
import Child from './components/Shops/Child';
import Fashion from './components/Shops/Fashion';
import Mens from './components/Shops/Mens';
import Womens from './components/Shops/Womens';
import Electronics from './components/Shops/Electronics';
import Computer from './components/Shops/Computer';
import Sports from './components/Shops/Sports';
import Luggage from './components/Shops/Luggage';
import AddToCart from './pages/AddToCart';
import ListProductComponent from './components/ListProductComponent';
import ProductDashboard from './components/GetProduct';
import CustomerList from './Admin/CustomerList';
import OwnerList from './Admin/OwnerList';
import CategoryList from './Admin/CategoryList';
import AdminDashboard from './Admin/AdminDashboard';
import ShippingAddress from './pages/ShippingAddress';
import AdminHome from './Admin/AdminHome';
import AddCategory from './Admin/CategoryOperation/AddCategory';
import UpdateCategory from './Admin/CategoryOperation/UpdateCategory';
import AddCustomer from './Admin/CustomerOperation/AddCustomer';
import UpdateCustomer from './Admin/CustomerOperation/UpdateCustomer';
import AddOwner from './Admin/OnwerOperation/AddOwner';
import UpdateOwner from './Admin/OnwerOperation/UpdateOwner';
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/childs" element={<Child />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/computers" element={<Computer />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/luggage" element={<Luggage />} />
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/listproduct" element={<ListProductComponent />} />
          <Route path="/adminproduct" element={<ProductDashboard />} />
          <Route path='/admincustomer' element={<CustomerList />} />
          <Route path='/adminowner' element={<OwnerList />} />
          <Route path='/admincategory' element={<CategoryList />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/adminhome' element={<AdminHome />} />
          <Route path='/shippingaddress' element={<ShippingAddress />} />
          <Route path='/addcategory' element={<AddCategory />} />
          <Route path='/updatecategory' element={<UpdateCategory />} />
          <Route path='/addcustomer' element={<AddCustomer />} />
          <Route path='/updatecustomer' element={<UpdateCustomer />} />
          <Route path='/addowner' element={<AddOwner />} />
          <Route path='/updateowner' element={<UpdateOwner />} />





        </Routes>


      </BrowserRouter>
    </>

  );
}

export default App;
