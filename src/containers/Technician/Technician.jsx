import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container, Table } from 'semantic-ui-react';
import style from './Technician.css';
import list from '../../components/database/queue';

var list1 = [];
var i;
for (i = 0; i < list.length; i++) {
  list1.push({ order: i, id: list[i][1], difficulty: list[i][2], company: list[i][3], description: list[i][4], requestentered: list[i][5] }, )
}

export function helpTech() {
  for (i ; i < list.length; i++) {
    list1.push({ order: i+1, id: list[i][1], difficulty: list[i][2], company: list[i][3], description: list[i][4], requestentered: list[i][5] }, )
  }
  console.log('help worked Tech');
}


console.log(list);
class Tech extends Component {

  render() {

    const menuItemsLeft = [
      { key: 'home', to: '#', content: 'MODEL Computing' },
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
        <div id='table'>
          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Order</Table.HeaderCell>
                <Table.HeaderCell>Job ID</Table.HeaderCell>
                <Table.HeaderCell>Company</Table.HeaderCell>
                <Table.HeaderCell>Difficulty</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Request Entered</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {list1.map(item => (
                <Table.Row>
                  <Table.Cell>{item.order}</Table.Cell>
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell>{item.company}</Table.Cell>
                  <Table.Cell>{item.difficulty}</Table.Cell>
                  <Table.Cell>{item.description}</Table.Cell>
                  <Table.Cell>{item.requestentered}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}
export default Tech;