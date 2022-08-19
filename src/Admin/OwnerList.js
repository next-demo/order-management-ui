import React from "react";
import {axios} from 'react';
import CustomNavBar from "../components/NavBar";
import OwnerService from "../services/owner-service";
import AdminDashboard from "./AdminDashboard";

class OwnerList extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      owner: []
    }
  }

  componentDidMount(){
      OwnerService.getOwner().then((res)=>{
        this.setState({owner: res.data});
      })
    
  }
  render(){
    return (
        <>
                <AdminDashboard/>


        <div>
             <h2 className="text-center">owners List</h2>
             <div className = "row">
                <a href="/addowner" className="btn btn-primary" style={{width:'176px',marginLeft:'20px'}} onClick={""}> Add owner</a>
             </div>
             <br></br>
             <div className = "row" style={{marginLeft:'30px'}}>
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr >
                                <th>owner Id</th>
                                <th>owner Name</th>
                                <th>owner Contact Detail</th>
                                <th>owner Password</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.owner.map(
                                    owner => 
                                    <tr>
                                         <td> { owner.ownerId} </td>   
                                         <td> { owner.name} </td>   
                                         <td> {owner.contact_detail}</td>
                                         <td> {owner.password}</td>
                                         <td>
                                             <a href="/updateowner" className="btn btn-info">Update </a>
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
export default OwnerList;