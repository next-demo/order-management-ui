import React from 'react';

const DropDown = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Ecommerce Store</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a class="dropdown-item" href="/electronics">Electronics</a></li>
                                        <li><a class="dropdown-item" href="/computers">Computers</a></li>
                                        <li><a class="dropdown-item" href="/fashion">Fashion</a></li>
                                        <li><a class="dropdown-item" href="/mens">Men's Fashion</a></li>
                                        <li><a class="dropdown-item" href="/womens">Women's Fashion</a></li>
                                        <li><a class="dropdown-item" href="/childs">Child's Fashion</a></li>
                                        <li><a class="dropdown-item" href="/luggage">Luggage</a></li>
                                       
                                        <li><a class="dropdown-item" href="/sports">Sports and Outdoors</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default DropDown;