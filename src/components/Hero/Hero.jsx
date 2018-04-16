import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import RegisterForm from '../../components/RegistrationForm/RegistrationForm';
import './Hero.css'

const Header = () => (
  <div className="Hero-container">
    <Grid stackable columns={2} centered container verticalAlign="middle">
      <Grid.Column
        mobile={16}
        tablet={8}
        computer={8}
        largeScreen={8}
        widescreen={8}
      >
        <Segment className="Hero-content" basic>
          <h1 className="Hero-header">MODEL Computing Service</h1>
          <p className="Hero-info">
            Professionsal IT Services that can be requested quickly and easily with very fast responce.
        </p>
        </Segment>
      </Grid.Column>
      <Grid.Column
        tablet={8}
        computer={8}
        largeScreen={8}
        widescreen={8}
        only="tablet computer"
      >
        <Segment className="Hero-form" basic textAlign="center">
          <h1 className="Hero-header">Sign Up</h1>
          <RegisterForm />
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default Header;