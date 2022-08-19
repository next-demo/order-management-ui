import React from "react";
import {axios} from 'react';
import CustomerService from "../services/customer-service";
import AdminDashboard from "./AdminDashboard";

class CustomerList extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      customer: []
    }
  }

  componentDidMount(){
      CustomerService.getCustomer().then((res)=>{
        this.setState({customer: res.data});
      })
    
  }
  render(){
    return (
        <>
        <AdminDashboard/>
        <div>
             <h2 className="text-center">Customers List</h2>
             <div className = "row">
                <a  href="/addcustomer" className="btn btn-primary" style={{width:'176px',marginLeft:'20px'}} onClick={""}> Add customer</a>
             </div>
             <br></br>
             <div className = "row" style={{marginLeft:'30px'}}>
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr >
                                <th>Customer Id</th>
                                <th>Customer Name</th>
                                <th>Customer Contact Detail</th>
                                <th>Customer Password</th>
                                {/* <th>Owner Id </th> */}
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customer.map(
                                    customer => 
                                    <tr >
                                         <td> { customer.id} </td>   
                                         <td> { customer.name} </td>   
                                         <td> {customer.contactdetail}</td>
                                         <td> {customer.password}</td>
                                         {/* <td> {customer.ownerId}</td> */}
                                         <td>
                                             <a  href="/updatecustomer"className="btn btn-info">Update </a>
                                             <button style={{marginLeft: "5px"}} className="btn btn-danger">Delete </button>
                                         </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

             </div>

        </div>
        </>
    )

    
  }
}
export default CustomerList;