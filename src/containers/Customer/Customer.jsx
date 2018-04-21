import React from 'react';
import { Form, Menu, Container, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import style from '../../components/Navbar/Navbar.css';
import list from '../../components/database/queue';
import { helpTech } from '../Technician/Technician';
import { helpManager } from '../../components/ManagerComponents/QueueDisplay/QueueDisplay';
import './Customer.css';

//current date and time
var currentdate = new Date();
var date = currentdate.getDate() + "/"
  + (currentdate.getMonth() + 1) + "/"
  + currentdate.getFullYear() + " @ "
  + currentdate.getHours() + ":"
  + currentdate.getMinutes() + ":"
  + currentdate.getSeconds();

//entries
var JobID = 100;


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


export default class CustomerPage extends React.Component {

  constructor() {
    super()
    this.state = {
      showPopup: false,
      Company: '',
      Description: '',
      Difficulty: '',
    }

    this.onChange = this.onChange.bind(this)
  }

  togglePopup(e) {
    e.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup
    });
    if (this.state.showPopup) {
      list.push([1, JobID, this.state.Difficulty, this.state.Company, this.state.Description, date, false]);
      JobID++;
      helpTech()
      helpManager()
    }
  }

  onChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  };

  render() {
    const menuItemsLeft = [
      { key: 'home', to: '#', content: 'MODEL Computing' },
      { key: 'service', to: '/service', content: 'Service Request' },
      { key: 'bill', to: '/customerBills', content: 'Bills' },
    ];

    const menuItemsRight = [
      { key: 'logout', to: '/login', content: 'Log Out' },
    ];

    const states = [
      { key: 1, text: 'Alabama', name: 'AL', value: 'AL' },
      { key: 2, text: 'Alaska', name: 'AK', value: 'AK' },
      { key: 3, text: 'Arizona', name: 'AZ', value: 'AZ' },
      { key: 4, text: 'Arkansas', name: 'AR', value: 'AR' },
      { key: 5, text: 'California', name: 'CA', value: 'CA' },
      { key: 6, text: 'Colorado', name: 'CO', value: 'CO' },
      { key: 7, text: 'Connecticut', name: 'CT', value: 'CT' },
      { key: 8, text: 'Delaware', name: 'DE', value: 'DE' },
      { key: 9, text: 'Florida', name: 'FL', value: 'FL' },
      { key: 10, text: 'Georgia', name: 'GA', value: 'GA' },
      { key: 11, text: 'Hawaii', name: 'HI', value: 'HI' },
      { key: 12, text: 'Idaho', name: 'ID', value: 'ID' },
      { key: 13, text: 'Illinois', name: 'IL', value: 'IL' },
      { key: 14, text: 'Indiana', name: 'IN', value: 'IN' },
      { key: 15, text: 'Iowa', name: 'IA', value: 'IA' },
      { key: 16, text: 'Kansas', name: 'KS', value: 'KS' },
      { key: 17, text: 'Kentucky', name: 'KY', value: 'KY' },
      { key: 18, text: 'Louisiana', name: 'LA', value: 'LA' },
      { key: 19, text: 'Maine', name: 'ME', value: 'ME' },
      { key: 20, text: 'Maryland', name: 'MD', value: 'MD' },
      { key: 21, text: 'Massachusetts', name: 'MA', value: 'MA' },
      { key: 22, text: 'Michigan', name: 'MI', value: 'MI' },
      { key: 23, text: 'Minnesota', name: 'MN', value: 'MN' },
      { key: 24, text: 'Mississippi', name: 'MS', value: 'MS' },
      { key: 25, text: 'Missouri', name: 'MO', value: 'MO' },
      { key: 26, text: 'Montana', name: 'MT', value: 'MT' },
      { key: 27, text: 'Nebraska', name: 'NE', value: 'NE' },
      { key: 28, text: 'Nevada', name: 'NV', value: 'NV' },
      { key: 29, text: 'New Hampshire', name: 'NH', value: 'NH' },
      { key: 30, text: 'New Jersey', name: 'NJ', value: 'NJ' },
      { key: 31, text: 'New Mexico', name: 'NM', value: 'NM' },
      { key: 32, text: 'New York', name: 'NY', value: 'NY' },
      { key: 33, text: 'North Carolina', name: 'NC', value: 'NC' },
      { key: 34, text: 'North Dakota', name: 'ND', value: 'ND' },
      { key: 35, text: 'Ohio', name: 'OH', value: 'OH' },
      { key: 36, text: 'Oklahoma', name: 'OK', value: 'OK' },
      { key: 37, text: 'Oregon', name: 'OR', value: 'OR' },
      { key: 38, text: 'Pennsylvania', name: 'PA', value: 'PA' },
      { key: 39, text: 'Rhode Island', name: 'RI', value: 'RI' },
      { key: 40, text: 'South Carolina', name: 'SC', value: 'SC' },
      { key: 41, text: 'South Dakota', name: 'SD', value: 'SD' },
      { key: 42, text: 'Tennessee', name: 'TN', value: 'TN' },
      { key: 43, text: 'Texas', name: 'TX', value: 'TX' },
      { key: 44, text: 'Utah', name: 'UT', value: 'UT' },
      { key: 45, text: 'Vermont', name: 'VT', value: 'VT' },
      { key: 46, text: 'Virginia', name: 'VA', value: 'VA' },
      { key: 47, text: 'Washington', name: 'WA', value: 'WA' },
      { key: 48, text: 'West Virginia', name: 'WV', value: 'WV' },
      { key: 49, text: 'Wisconsin', name: 'WI', value: 'WI' },
      { key: 50, text: 'Wyoming', name: 'WY', value: 'WY' },
    ];

    return (
      <div id='customerPage'>
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
        <h1>Service Request Form</h1>
        <Grid columns={1} centered verticalAlign='middle' style={{ padding: '2em' }}>
          <Grid.Column
            mobile={16}
            computer={6}
            tablet={8}
            textAlign='center'
          >
            <Form id="customerForm">
              <Form.Input
                label='Company Name'
                name="Company"
                type='text'
                placeholder="Company Name"
                value={this.state.value}
                onChange={this.onChange}
              />
              <Form.Group widths='equal'>
                <Form.Input
                  label='First Name'
                  name="FirstName"
                  type='text'
                  placeholder="John"
                />
                <Form.Input
                  label='Last Name'
                  name="LastName"
                  type='text'
                  placeholder="Doe"
                />
              </Form.Group>
              <Form.Input
                label='Address'
                name="address1"
                type='text'
                placeholder="Address line 1"
              />
              <Form.Input
                name="address2"
                type='text'
                placeholder="Address line 2"
              />
              <Form.Group widths='equal'>
                <Form.Input
                  label='City'
                  name="City"
                  type='text'
                  placeholder="City"
                />
                <Form.Dropdown
                  label='State'
                  name="state"
                  placeholder="Select State"
                  fluid
                  selection
                  closeOnChange
                  options={states}
                />
              </Form.Group>
              <Form.Input
                label='Problem Description'
                name="Description"
                type='text'
                placeholder="Problem description"
                value={this.state.value}
                onChange={this.onChange}
              />
              <Form.Input
                label='Difficulty of the problem 1(easiest) - 3(hardest)'
                name="Difficulty"
                placeholder="Difficulty of the problem"
                value={this.state.value}
                onChange={this.onChange}
              />
            </Form>
            <Form.Button id='button' onClick={this.togglePopup.bind(this)}>Submit</Form.Button>
          </Grid.Column>
        </Grid>
        <Footer />
        {this.state.showPopup ?
          <Popup
            text='Request Submitted'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

console.log(list)