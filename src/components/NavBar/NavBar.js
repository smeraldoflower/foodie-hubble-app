//NavBar tutorial by Brian Design: https://www.youtube.com/watch?v=VzWBLj_CfpE&ab_channel=BrianDesign
import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements'


function NavBar() {
    return (
        <>
        <Nav>
            <NavLink to="/"><h1>🔭 FOODIE HUBBLE</h1></NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/" activeStyle><h3>Home</h3></NavLink>
                <NavLink to="/About" activeStyle><h3>About</h3></NavLink>
                <NavLink to="/Restaurants" activeStyle><h3>Restaurants</h3></NavLink>
                <NavLink to="/Order" activeStyle><h3>Order</h3></NavLink>
                <NavLink to="/UserInfo" activeStyle><h3>User Info</h3></NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/Login"><h3>LOGIN</h3></NavBtnLink>
            </NavBtn>
            <NavBtn>
                <NavBtnLink to="/SignUp"><h3>SIGNUP</h3></NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    )
}

export default NavBar
