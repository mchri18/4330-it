import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import Scrollchor from 'react-scrollchor';
import style from './Navbar.css';

const menuItemsLeft = [
  { key: 'home', exact: true, to: '#home', content: 'MODEL Computing' },
  { key: 'features', to: '#features', content: 'Features' },
  { key: 'mission', to: '#mission', content: 'Our Mission' },
  { key: 'contact', to: '#contact', content: 'Contact Us' },
];

const menuItemsRight = [
  { key: 'register', to: '/register', content: 'Register' },
  { key: 'login', to: '/login', content: 'Sign In' },
];

const Navbar = () => (
  <div className="Navbar-container">
    <Container>
      <Menu
        style={style}
        borderless
        fluid
        pointing
        secondary
        stackable
        size="huge"
      >
        <Menu.Menu position="left">
          {menuItemsLeft.map(item => (
            <Menu.Item
              key={item.key}
              as={Scrollchor}
              exact={item.exact}
              className="nav-link"
              to={item.to}
              content={item.content}
            />
          ))}
        </Menu.Menu>
        <Menu.Menu position="right">
          {menuItemsRight.map(item => (
            <Menu.Item
              className="Menu-item"
              key={item.key}
              as={NavLink}
              exact={item.exact}
              to={item.to}
              content={item.content}
            />
          ))}
        </Menu.Menu>
      </Menu>
    </Container>
  </div>
);

export default Navbar;