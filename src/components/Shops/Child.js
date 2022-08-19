import React from 'react';
import { Button } from 'reactstrap';
import Category from '../Category';
import NewCategory from '../NewCategory';
const Child = () => {
    return (
        <>

            <NewCategory/>




            {/* list of product */}
            <div className='prod'>
                <div class="row row-cols-1 row-cols-md-4 g-4 " >
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://m.media-amazon.com/images/I/81wyAHmcXQL._UL1500_.jpg" class="card-img-top" alt="..."  className="cardimg"/>
                            <div class="card-body">
                                <h5 class="card-title"><b>Dell Wireless Mouse</b></h5>
                                <p class="card-text"><b>Description</b>: A computer mouse with the most common features: two buttons (left and right) and a scroll wheel (which also functions as a button)</p>
                                <p class="card-text"><b>Brand: </b>Dell</p>
                                <p class="card-text"><b>Price:</b> 1200</p>
                            </div>
                            <div class="card-body">
                                <Button className='btn-dark m-3'>Add to Cart</Button>
                                <Button className='btn-dark'>Go to Cart</Button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://m.media-amazon.com/images/I/61RQQER61LL._UL1481_.jpg" class="card-img-top" alt="..." className="cardimg"/>
                            <div class="card-body">
                                <h5 class="card-title"><b>Dell Wireless Mouse</b></h5>
                                <p class="card-text"><b>Description</b>: A computer mouse with the most common features: two buttons (left and right) and a scroll wheel (which also functions as a button)</p>
                                <p class="card-text"><b>Brand: </b>Dell</p>
                                <p class="card-text"><b>Price:</b> 1200</p>
                            </div>
                            <div class="card-body">
                                <Button className='btn-dark m-3'>Add to Cart</Button>
                                <Button className='btn-dark'>Go to Cart</Button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://m.media-amazon.com/images/I/91Y+ebcFMVL._UL1500_.jpg" class="card-img-top" alt="..."className="cardimg" />
                            <div class="card-body">
                                <h5 class="card-title"><b>Dell Wireless Mouse</b></h5>
                                <p class="card-text"><b>Description:</b> A computer mouse with the most common features: two buttons (left and right) and a scroll wheel (which also functions as a button)</p>
                                <p class="card-text"><b>Brand: </b>Dell</p>
                                <p class="card-text"><b>Price:</b> 1200</p>
                            </div>
                            <div class="card-body">
                                <Button className='btn-dark m-3'>Add to Cart</Button>
                                <Button className='btn-dark'>Go to Cart</Button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://m.media-amazon.com/images/I/91Y+ebcFMVL._UL1500_.jpg" class="card-img-top" alt="..." className="cardimg"/>
                            <div class="card-body">
                                <h5 class="card-title"><b>Dell Wireless Mouse</b></h5>
                                <p class="card-text"><b>Description</b> A computer mouse with the most common features: two buttons (left and right) and a scroll wheel (which also functions as a button)</p>
                                <p class="card-text"><b>Brand: </b>Dell</p>
                                <p class="card-text"><b>Price:</b> 1200</p>
                            </div>
                            <div class="card-body">
                                <Button className='btn-dark m-3'>Add to Cart</Button>
                                <Button className='btn-dark'>Go to Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='prod'>
                <div class="row row-cols-1 row-cols-md-4 g-4 " style={{ widhth: '50px' }}>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://m.media-amazon.com/images/I/71U3IBNmlOL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." className="cardimg"/>
                            <div class="card-body">
                                <h5 class="card-title"><b>Dell Wireless Mouse</b></h5>
                                <p class="card-text"><b>Description</b>: A computer mouse with the most common features: two buttons (left and right) and a scroll wheel (which also functions as a button)</p>
                                <p class="card-text"><b>Brand:</b>Dell</p>
                                <p class="card-text"><b>Price:</b> &#8377;1200</p>
                            </div>
                            <div class="card-body">
                                <Button className='btn-dark m-3'>Add to Cart</Button>
                                <Button className='btn-dark'>Go to Cart</Button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://m.media-amazon.com/images/I/51qFkrRd9KL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..."className="cardimg" />
                            <div class="card-body">
                                <h5 class="card-title"><b>Dell Wireless Mouse</b></h5>
                                <p class="card-text"><b>Description</b>: A computer mouse with the most common features: two buttons (left and right) and a scroll wheel (which also functions as a button)</p>
                                <p class="card-text"><b>Brand:</b>Dell</p>
                                <p class="card-text"><b>Price:</b> &#8377;1200</p>
                            </div>
                            <div class="card-body">
                                <Button className='btn-dark m-3 ' >Add to Cart</Button>
                                <Button className='btn-dark'>Go to Cart</Button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://m.media-amazon.com/images/I/61Bs8dETthL._UL1500_.jpg" class="card-img-top" alt="..."className="cardimg" />
                            <div class="card-body">
                                <h5 class="card-title"><b>Dell Wireless Mouse</b></h5>
                                <p class="card-text"><b>Description:</b> A computer mouse with the most common features: two buttons (left and right) and a scroll wheel (which also functions as a button)</p>
                                <p class="card-text"><b>Brand:</b>Dell</p>
                                <p class="card-text"><b>Price:</b> &#8377;1200</p>
                            </div>
                            <div class="card-body">
                                <Button className='btn-dark m-3'>Add to Cart</Button>
                                <Button className='btn-dark'>Go to Cart</Button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://m.media-amazon.com/images/I/814s+mNQP8L._UL1500_.jpg" class="card-img-top" alt="..."className="cardimg" />
                            <div class="card-body">
                                <h5 class="card-title"><b>Dell Wireless Mouse</b></h5>
                                <p class="card-text"><b>Description</b> A computer mouse with the most common features: two buttons (left and right) and a scroll wheel (which also functions as a button)</p>
                                <p class="card-text"><b>Brand:</b>Dell</p>
                                <p class="card-text"><b>Price:</b> &#8377;1200</p>
                            </div>
                            <div class="card-body">
                                <Button className='btn-dark m-3'>Add to Cart</Button>
                                <Button className='btn-dark'>Go to Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Child;