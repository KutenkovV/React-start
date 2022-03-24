import React, { Component } from 'react'
import { 
    Container, 
    Form,
    Button, 
    FormControl, 
    Nav, 
    Navbar 
} from 'react-bootstrap'

import { Route } from 'react-router-dom'
import logo from './logo192.png'
import { 
    BrowserRouter as Router, 
    Switch
} from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link href='/' > Home </Nav.Link>
                                <Nav.Link href='/about' > About us </Nav.Link>
                                <Nav.Link href='/contacts' > Contacts </Nav.Link>
                                <Nav.Link href='/blog' > Blog </Nav.Link>
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='d-inline mx-2'
                                />
                            </Form>
                            <Button variant='outline-info'>Search</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contacts' component={Contacts} />
                        <Route exact path='/blog' component={Blog} />
                    </Switch>
                </Router>
            </>
        )
    }
}
