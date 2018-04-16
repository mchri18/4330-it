import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import Footer from '../../components/Footer/Footer';
import style from './Technician.css';

class Tech extends Component {

  render() {

    const menuItemsLeft = [
      { key: 'home', to: '/account', content: 'MODEL Computing' },
      { key: 'request', to: '/technician', content: 'Requests' },
      { key: 'billgenerator', to: '/technicianBilling', content: 'Bill Generator' },
    ];

    const menuItemsRight = [
      { key: 'logout', to: '/login', content: 'Log Out' },
    ];

    return (
      <div>
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
                    as={NavLink}
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
        <Footer />
      </div>
    );
  }
}

export default Tech;