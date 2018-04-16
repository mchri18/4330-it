import React from 'react';
import { Form, Container } from 'semantic-ui-react';
import './Contact.css';

const Contact = () => (
  <Container textAlign='center' id="Contact-field">
    <h1 id="Contact-us">Contact Us</h1>
    <p id="contact-p">Please send any questions or concerns. We will be happy to answer any questions that you may have. </p>
    <Form>
      <Form.Group widths='equal'>
        <Form.Input fluid label="First name" placeholder="First name" />
        <Form.Input fluid label='Last name' placeholder='Last name' />
      </Form.Group>
      <Form.Input fluid label='Email' placeholder='Email' width={8}/>
      <Form.TextArea fluid label='Email Content' placeholder='Email content' />
      <Form.Button content="Send Email"/>
    </Form>
  </Container>
);

export default Contact;