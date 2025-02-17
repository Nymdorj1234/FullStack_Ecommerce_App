import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import { useHistory } from "react-router-dom";
import SearchBarForProducts from './SearchBarForProducts'


function NavBar() {

    let history = useHistory()
    const dispatch = useDispatch()

    // login reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer

    // logout
    const logoutHandler = () => {
        dispatch(logout()) // action
        history.push("/login")
        window.location.reload()
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand><i className="mb-2 fas fa-home"> Нүүр</i></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            {/* All Products */}
                            <LinkContainer to="/">
                                <Nav.Link >Бүх бүтээгдэхүүн</Nav.Link>
                            </LinkContainer>

                            {/* New Product (Admins Only) */}

                            {userInfo && userInfo.admin ?
                                <LinkContainer to="/new-product/">
                                    <Nav.Link >Бүтээгдэхүүн нэмэх</Nav.Link>
                                </LinkContainer>
                                : ""
                            }

                                <span className="">
                                    <SearchBarForProducts />
                                </span>

                        </Nav>

                        {/* login-logout condition here */}

                        {userInfo ?
                            <div>
                                <NavDropdown className="navbar-nav text-capitalize" title={userInfo.username} id='username'>
                                    <LinkContainer to="/account">
                                        <NavDropdown.Item>Бүртгэлийн тохиргоо</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/all-addresses/">
                                        <NavDropdown.Item>Хаягийн тохиргоо</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/stripe-card-details/">
                                        <NavDropdown.Item>Картын тохиргоо</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/all-orders/">
                                        <NavDropdown.Item>Бүх захиалга</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Гарах
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            :

                            <LinkContainer to="/login">
                                <Nav.Link><i className="fas fa-user"></i> Нэвтрэх</Nav.Link>
                            </LinkContainer>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar
