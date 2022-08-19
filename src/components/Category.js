import React from 'react';

const Category = () => {
    return (
        <div class='mh-100'>
            <nav class="navbar navbar-dark bg-dark fixed-top " style={{ height: '90px' }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Ecommerce Store</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Search By Category</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                

                                {/* //new drop stepDown */}

                               
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </a>


                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby='naavbarDropdown'>
                                        <li><a class="dropdown-item" href="/electronics">Electronics</a></li>
                                        <li><a class="dropdown-item" href="/computers">Computers</a></li>
                                        <li><a class="dropdown-item" href="/fashion">Fashion</a></li>
                                        <li><a class="dropdown-item" href="/mens">Men's Fashion</a></li>
                                        <li><a class="dropdown-item" href="/womens">Women's Fashion</a></li>
                                        <li><a class="dropdown-item" href="/childs">Child's Fashion</a></li>
                                        <li><a class="dropdown-item" href="/luggage">Luggage</a></li>
                                       
                                        <li><a class="dropdown-item" href="/sports">Sports and Outdoors</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>

                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/support">Help and Supports</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-warning" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Category;