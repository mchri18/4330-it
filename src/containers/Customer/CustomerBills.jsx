import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import style from '../../components/Navbar/Navbar.css';
import './CustomerBills.css'


class CustomerBills extends React.Component {
  render() {
    const menuItemsLeft = [
      { key: 'home', to: '/account', content: 'MODEL Computing' },
      { key: 'service', to: '/customer', content: 'Service Request' },
      { key: 'bill', to: '/customerBills', content: 'Bills' },
    ];

    const menuItemsRight = [
      { key: 'logout', to: '/login', content: 'Log Out' },
    ];

    return (
      <div>
        <nav className="Navbar-container">
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
        </nav>
        <div id='billSection'>
          <h1>Bills</h1>
          <h2>Bill #1</h2>
          <div class='billInfo'>
            <div>
              <h3 class='customer'>Customer:</h3>
              <p class='customerName'>LSU</p>
            </div>
            <div>
              <h3 class='tech'>Technician Name:</h3>
              <p class='techName'>John Doe</p>
            </div>
            <div>
              <h3 class='techRate'>Technician Rate:</h3>
              <p class='rate'>$30</p>
            </div>
            <div>
              <h3 class='hours'>Technician Hours:</h3>
              <p class='techHours'>10</p>
            </div>
            <h3 class='total'>Total: $300</h3>
          </div>
          <h2>Bill #2</h2>
          <div>
              <h3 class='customer'>Customer:</h3>
              <p class='customerName'>LSU</p>
            </div>
            <div>
              <h3 class='tech'>Technician Name:</h3>
              <p class='techName'>Jane Doe</p>
            </div>
            <div>
              <h3 class='techRate'>Technician Rate:</h3>
              <p class='rate'>$40</p>
            </div>
            <div>
              <h3 class='hours'>Technician Hours:</h3>
              <p class='techHours'>12</p>
            </div>
            <h3 class='total'>Total: $480</h3>
          <h2>Bill #3</h2>
          <div>
              <h3 class='customer'>Customer:</h3>
              <p class='customerName'>LSU</p>
            </div>
            <div>
              <h3 class='tech'>Technician Name:</h3>
              <p class='techName'>Nathan Brener</p>
            </div>
            <div>
              <h3 class='techRate'>Technician Rate:</h3>
              <p class='rate'>$100</p>
            </div>
            <div>
              <h3 class='hours'>Technician Hours:</h3>
              <p class='techHours'>8</p>
            </div>
            <h3 class='total'>Total: $800</h3>
          <h2>Bill #4</h2>
          <div>
              <h3 class='customer'>Customer:</h3>
              <p class='customerName'>LSU</p>
            </div>
            <div>
              <h3 class='tech'>Technician Name:</h3>
              <p class='techName'>John Doe</p>
            </div>
            <div>
              <h3 class='techRate'>Technician Rate:</h3>
              <p class='rate'>$30</p>
            </div>
            <div>
              <h3 class='hours'>Technician Hours:</h3>
              <p class='techHours'>1</p>
            </div>
            <h3 class='total'>Total: $30</h3>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CustomerBills;