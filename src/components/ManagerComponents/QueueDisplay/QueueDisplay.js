import React from "react";
import { Table } from 'semantic-ui-react';
import './QueueDisplay.css';
import list from '../../database/queue';
import { Form } from 'semantic-ui-react';
import { reorderTech } from '../../../containers/Technician/Technician'

var temp;
var list1 = [];
var i;
for (i = 0; i < list.length; i++) {
  list1.push({
    order: i + 1, id: list[i][1],
    difficulty: list[i][2],
    company: list[i][3],
    description: list[i][4],
    requestentered: list[i][5]
  }, )
}

export function helpManager() {
  for (i; i < list.length; i++) {
    list1.push({ order: i + 1, id: list[i][1], difficulty: list[i][2], company: list[i][3], description: list[i][4], requestentered: list[i][5] }, )
  }
  console.log('help worked manager');
}

export function acceptMan() {
  list1 = []
  for (i = 0; i < list.length; i++) {
    list1.push({ order: i + 1, id: list[i][1], difficulty: list[i][2], company: list[i][3], description: list[i][4], requestentered: list[i][5] }, )
  }
  console.log('reset table');
}


export function reorderMan(index) {
  var temp = list[index];
  list.splice(index, 1)
  list.unshift(temp);
  console.log(list)
  list1 = []
  for (i = 0; i < list.length; i++) {
    list1.push({ order: i + 1, id: list[i][1], difficulty: list[i][2], company: list[i][3], description: list[i][4], requestentered: list[i][5] }, )
  }
}

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

export default class QueueDisplay extends React.Component {

  constructor() {
    super()
    this.state = {
      showPopup: false,
      JobId: '',
    }

    this.onChange = this.onChange.bind(this)
  }

  togglePopup(e) {
    e.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup
    });
    temp = this.state.JobId;
    if (this.state.showPopup) {
      console.log(temp);
      for (var i = 0; i < list.length; i++) {
        if (temp == (list[i][1])) {
          console.log("found ID");
          reorderMan(i);
        } else {
          console.log('not found');
        }
        console.log(list[i][1]);
      }
      reorderTech()
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
    return (
      <div id="QueueDisplay">
        <h1>Queue Display </h1>
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
        <div id="Emergency">
          <Form id="EmergencyForm">
            <Form.Input
              label='Enter the Job ID to be placed at the top of the Queue'
              name="JobId"
              type='text'
              placeholder="Job ID"
              value={this.state.value}
              onChange={this.onChange}
            />
          </Form>
          <Form.Button id='button' onClick={this.togglePopup.bind(this)}>Submit</Form.Button>
          {this.state.showPopup ?
            <Popup
              text='Submitted'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }

        </div>
      </div>
    );
  }
}
