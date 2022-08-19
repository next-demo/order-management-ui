import React from "react";
import {axios} from 'react';
import CustomNavBar from "../components/NavBar";
import CategoryService from "../services/category-service";
import AdminDashboard from "./AdminDashboard";
class CategoryList extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      category: []
      
    }
  
  }

  componentDidMount(){
      CategoryService.getCategory().then((res)=>{
        this.setState({category: res.data});
      })
    
  }
  render(){
    return (
        <>
        <AdminDashboard/>
        <div>
             <h2 className="text-center">Category List</h2>
             <div className = "row">
                <a  href="/addcategory "className="btn btn-primary" style={{width:'176px',marginLeft:'20px'}} > Add Category</a>
             </div>
             <br></br>
             <div className = "row" style={{marginLeft:'30px'}}>
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr >
                                <th>category Id</th>
                                <th>Category Name</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.category.map(
                                    category => 
                                    <tr >
                                        
                                         <td>{category.categoryId}</td>   
                                         <td> {category.categoryName }</td>   
                                         <td>
                                             <a  href="/updatecategory"className="btn btn-info">Update </a>
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
export default CategoryList;