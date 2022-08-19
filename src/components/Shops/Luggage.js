import React from 'react';
import { Button } from 'reactstrap';
import Category from '../Category';
import NewCategory from '../NewCategory';
const Luggage= () => {
    return (
    <>
      <NewCategory/>
           
            


           {/* list of product */}
           <div className='prod'>
               <div class="row row-cols-1 row-cols-md-4 g-4 " >
                   <div class="col">
                       <div class="card h-100">
                           <img src="https://m.media-amazon.com/images/I/61qaHHUKhwL._UL1500_.jpg" class="card-img-top" alt="..." />
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
                           <img src="https://m.media-amazon.com/images/I/81EASQlMkSS._UY535_.jpg" class="card-img-top" alt="..." />
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
                           <img src="https://m.media-amazon.com/images/I/61MUbvslk2L._SL1000_.jpg" class="card-img-top" alt="..." />
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
                           <img src="https://m.media-amazon.com/images/I/514xUT1xYVL._UL1500_.jpg" class="card-img-top" alt="..." />
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
                           <img src="https://m.media-amazon.com/images/I/51aJ3ggOKbL._SL1430_.jpg" class="card-img-top" alt="..." />
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
                           <img src="https://m.media-amazon.com/images/I/61-SNkMcaqL._UL1500_.jpg" class="card-img-top" alt="..." />
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
                           <img src="https://m.media-amazon.com/images/I/71ycqIb1P2L._SL1500_.jpg" class="card-img-top" alt="..." />
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
                           <img src="https://m.media-amazon.com/images/I/71UANKIqitL._SX679_.jpg" class="card-img-top" alt="..." />
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

export default Luggage;