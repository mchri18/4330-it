import React from "react";
import { Table } from 'semantic-ui-react';
import './QueueDisplay.css';
import list from '../../database/queue';

var list1 = [];
var i;
for (i = 0; i < list.length; i++) {
  list1.push({
    order: i+1, id: list[i][1],
    difficulty: list[i][2],
    company: list[i][3],
    description: list[i][4],
    requestentered: list[i][5]
  }, )
}

export function helpManager() {
  for (i; i < list.length; i++) {
    list1.push({ order: i+1, id: list[i][1], difficulty: list[i][2], company: list[i][3], description: list[i][4], requestentered: list[i][5] }, )
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

class QueueDisplay extends React.Component {
  render() {
    return (
      <div id="QueueDisplay">
        <h1>Queue Display </h1>
        <h3>Click on a job to move to the top of the queue</h3>
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

export default QueueDisplay;
