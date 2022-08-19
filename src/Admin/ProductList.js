import React, { useState } from "react";
import { useEffect } from "react";
import connection from "../services/connection";
import CustomNavBar from "./NavBar";
import AdminDashboard from "./AdminDashboard";
const MyProduct = props => (

    <tr className="table-info">
      
      <td>{props.myproduct.name}</td>
      <td>{props.myproduct.brand}</td>
      <td>{props.myproduct.category}</td>
      <td>{props.myproduct.description}</td>
      <td>{props.myproduct.price}</td>
      <td>{props.myproduct.image}</td>
      <td>{props.myproduct.category_id}</td>
      <td>{props.myproduct.customer_id}</td>
      <td>{props.myproduct.owner_id}</td>
      <td>{props.myproduct.product_name}</td>

    </tr>
  );
const ProductDashboard =() =>{
    const [product,setProduct] = useState({
            myproduct: []
        });
    useEffect(()=>{
        connection
      .get("/api/products/")
      .then(response => {
        console.log(response.data)
        Object.entries(response.data["details"]).forEach(item => {
          console.log(item[1]);
          product.myproduct.push(item[1]);
        //   setProperty({ myproduct: [...property.myproduct,item[1] ]})
        //   Object.entries(item[1]).forEach(element => {
        //     console.log(element[1]);
        //     Object.entries(item[1]).forEach(element1 => {
        //         console.log(element1[1]);
        //         console.log(property.myproduct);
        //         setProperty({ myproduct: [...property.myproduct,element1[1] ]})
        //         // console.log(property.myproduct);
        //       })
            console.log(product.myproduct);
        //   })
        //   setProperty({ myproduct: [...this.state.myproduct,item[1] ]})
        },[])
        
      })
      .catch(error => error.message);
    })

    

     const listmyproduct = () => {
        return product.myproduct.map((currentmyproduct, index) => {
          return <MyProduct myproduct={currentmyproduct} key={index} />;
        });
      };

    return(
        <div>
               <AdminDashboard/>


           
        <h1> Product list </h1>
      
        <table className="table table-hover table-striped table-info">
          <thead>
            <tr className="table-danger">
              <th>Product Id</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Category_id</th>
              <th>Customer_id</th>
              <th>Owner_id</th>
              <th>Product Name</th>
             
            </tr>
          </thead>
          <tbody>{listmyproduct()}</tbody>
        </table>
      </div>
    )
}
export default ProductDashboard;