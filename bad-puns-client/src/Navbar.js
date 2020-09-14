import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';

class Navbar extends Component{

    render(){
        return (
            <div>
                <Menu fixed="top" inverted>
                    <Container>
                        <Menu.Item as="a" header href="/">
                            Okta-React Sample Project
                        </Menu.Item>
                         <Menu.Item id="movies-button" as="a" href="/movies">Movies</Menu.Item>
                         <Menu.Item id="logout-button" as="a" onClick={this.logout}>Logout</Menu.Item>
                         <Menu.Item as="a" onClick={this.login}>Login</Menu.Item>
                    </Container>
                </Menu>
            </div>
        );
    }
}

export default Navbar
