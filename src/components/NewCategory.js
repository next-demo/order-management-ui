import React from 'react';

const NewCategory = () => {
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{ color: 'white', height: '90px' }}>
                    <a class="navbar-brand" href="/">Ecommerce Store</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">


                            <li class="nav-item"><a class="nav-link" href="/products">All Products</a></li>
                            <li class="nav-item"><a class="nav-link" href="/fashion">Fashion</a></li>
                            <li class="nav-item"><a class="nav-link" href="/mens">Men's Fashion</a></li>
                            <li class="nav-item"><a class="nav-link" href="/womens">Women's Fashion</a></li>
                            <li class="nav-item"><a class="nav-link" href="/childs">Child's Fashion</a></li>
                            <li class="nav-item"><a class="nav-link" href="/electronics">Electronics</a></li>
                            <li class="nav-item"><a class="nav-link" href="/computers">Computers</a></li>
                            <li class="nav-item"><a class="nav-link" href="/luggage">Luggage</a></li>

                            <li class="nav-item"><a class="nav-link" href="/sports">Sports and Outdoors</a></li>

                        </ul>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default NewCategory;