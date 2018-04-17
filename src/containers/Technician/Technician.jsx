import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import Footer from '../../components/Footer/Footer';
import Draggable from 'react-draggable';
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
        </div>
        <div id="QueueDisplay">
          <h1>Queue Display </h1>
          <div id="Customers">
            <h2>Customers</h2>
          </div>
          <Draggable
            axis="x"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[50, 50]}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div className="Drag">
              <div className="handle"></div>
              <div>Nancy Stevens</div>
            </div>
          </Draggable>

          <Draggable
            axis="x"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[50, 50]}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div className="Drag">
              <div className="handle"></div>
              <div>Thomas Kip</div>
            </div>
          </Draggable>

          <Draggable
            axis="x"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[50, 50]}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div className="Drag">
              <div className="handle"></div>
              <div>Mike Richards</div>
            </div>
          </Draggable>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Tech;