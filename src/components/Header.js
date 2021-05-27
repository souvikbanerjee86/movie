import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
            <Navbar bg="dark" variant="dark"  expand='lg' collapseOnSelect>
            <header>
            <Container>
                    <LinkContainer to='/'><Navbar.Brand >SMDB</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className="mr-auto">
                            <NavDropdown title='Movie' id='Movie'>
                                <LinkContainer to='/movies'>
                                    <NavDropdown.Item>Popular</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/m-playing'>
                                <NavDropdown.Item>Now Playing</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/m-upcomming'>
                                <NavDropdown.Item>Up Comming</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/top-movies'>
                                <NavDropdown.Item>Top Rated</NavDropdown.Item>
                            </LinkContainer>
                                </NavDropdown>


                            <NavDropdown title='Tv Shows' id='tvShows'>
                                <LinkContainer to='/tvshows'>
                                    <NavDropdown.Item>Popular</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/airing-today'>
                                <NavDropdown.Item>Airing Today</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/on-tv'>
                                <NavDropdown.Item>On TV</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/top-rated'>
                                <NavDropdown.Item>Top Rated</NavDropdown.Item>
                            </LinkContainer>
                                </NavDropdown>

                                <NavDropdown title='People' id='people'>
                                <LinkContainer to='/peoples'>
                                    <NavDropdown.Item>Popular People</NavDropdown.Item>
                                </LinkContainer>
                                </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    
                        
            </Container>
               
                </header>
            </Navbar>
     
    )
}

export default Header
