import React, { Component } from 'react'
import ProductService from '../services/product-service'

export class ListProductComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {

             products: []
        }
    }
     
    componentDidMount()
    {
    ProductService.getProducts().then((res)=>
            {
              this.setState({
                products:res.data
              });
            })
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Products List</h2>
                <div className="row">
                <table className='table table-striped table-bordered'>
                    <thead>
                    <tr>
                       <th> Product Name</th>
                       <th> Product Category</th>
                       <th> Product Brand</th>
                       <th> Product Price</th>
                       <th> Product Description</th>
                       <th> Product Image</th>
                       <th> Product category Id</th>
                       <th> Product Owner Id</th>
                       <th> Product Customer Id</th>
                       <th> Product_Name</th>
                    </tr>

                    </thead>
                    <tbody>
                          {
                            this.state.products.map(
                                product =>
                                <tr key = {product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.image}</td>
                                    <td>{product.category_id}</td>
                                    <td>{product.owner_id}</td>
                                    <td>{product.product_name}</td>

                                </tr>
                            )
                          }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ListProductComponent
