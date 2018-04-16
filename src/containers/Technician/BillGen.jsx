import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Grid, Menu, Container } from 'semantic-ui-react';
import Footer from '../../components/Footer/Footer';
import style from './BillGen.css';
import './BillGen.css';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>OK</button>
        </div>
      </div>
    );
  }
}

class BillingPage extends Component {

  constructor() {
    super()
    this.state = {
      rate: '',
      hours: '',
      total: '',
      showPopup: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });

  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {

    const menuItemsLeft = [
      { key: 'home', to: '/account', content: 'MODEL Computing' },
      { key: 'request', to: '/technician', content: 'Requests' },
      { key: 'billgenerator', to: '/technician/Billing', content: 'Bill Generator' },
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
        <div id='body'>
          <Grid
            columns={1}
            centered
            verticalAlign='middle'
            style={{ height: '50vh' }}
          >
            <Grid.Column
              mobile={16}
              computer={6}
              tablet={8}
              textAlign='center'
              verticalAlign='middle'
            >
              <Form>
                <Form.Input fluid label='Company' placeholder="Compnay Name" />
                <Form.Input fluid label='Technician Name' placeholder="Technician Name" />
                <Form.Input fluid name='rate' label='Rate' placeholder="Technician Rate" onChange={this.handleChange} />
                <Form.Input fluid name='hours' label='Hours' placeholder="Jobs Hours" onChange={this.handleChange} />
                <Form.Button class='button' onClick={this.togglePopup.bind(this)}>Submit</Form.Button>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
        <Footer />
        {this.state.showPopup ?
          <Popup
            text='Bill Submitted'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default BillingPage;