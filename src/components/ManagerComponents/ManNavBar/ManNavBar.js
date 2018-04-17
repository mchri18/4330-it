import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import Scrollchor from 'react-scrollchor';
import style from './ManNavBar.css';

const menuItemsLeft = [
    { key: 'manager', content: 'Manager Page' },
    { key: 'techtracker', to: '#techtracker', content: 'Tech Tracker' },
    { key: 'queueqisplay', to: '#queueqisplay', content: 'Queue Display' },
    { key: 'reports', to: '#reports', content: 'Reports' },
];

const menuItemsRight = [
  { key: 'signout', to: '/login', content: 'Sign Out' },
];

const ManNavBar = () => (
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

export default ManNavBar;
