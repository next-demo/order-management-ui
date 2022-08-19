import Footer from "./Footer";
import CustomNavBar from "./NavBar";
import NewFooter from "./NewFooter";
import Slide from "./Slide";

const Base = ({title="Welcome to Ecommerce Store",children}) => {
    return (
        <div className="container-fluid p-0 m-0">
           <CustomNavBar/>
           {/* <Slide/> */}
        

            {children}

            <NewFooter/>

            
            
        </div>
    );
};

export default Base;