import React from 'react';
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from 'reactstrap'
const CustomNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);



    return (
        <div>
            <div>
      <Navbar color='black' dark expand="md" fixed='' style={{height:'90px'}}>
        <NavbarBrand href="/">Ecommerce Store</NavbarBrand>
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar style={{fontSize:'20px'}}>
            <NavItem>
              <NavLink href="/products/">Products</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/admindashboard/">Admin Dashboard</NavLink>
            
            </NavItem>
        
            <NavLink href="/login">
                Login
              </NavLink>
              <NavLink href="/signup">
                Sign Up
              </NavLink>
              <NavLink href="/cart">
                Cart
              </NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

        </div>
    );
};

export default CustomNavBar;