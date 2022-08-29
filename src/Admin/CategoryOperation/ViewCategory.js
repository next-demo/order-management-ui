import React, { Component } from 'react'
import categoryService from '../../services/category-service'
export default class ViewCategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categoryId: this.props.match.params.categoryId,
            category: {}
        }
    }
    componentDidMount() {
        categoryService.getCategoryById(this.state.categoryId.then(res => {
            this.setState({ category: res.data })
        }))
    }

    render() {
        return (
            <div>
                <br></br>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>Category Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label>Category Id: </label>
                            <div>{this.state.category.categoryId}</div>


                        </div>
                        <div className='row'>
                            <label>Category Name: </label>
                            <div>{this.state.category.categoryName}</div>


                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
