import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import './Features.css'

const Features = () => (
  <div id="Features">
    <h1 id="features-title">Features</h1>
    <Grid centered columns={3}>
      <Grid.Column width={5}>
        <Image circular centered src='/assets/feature1.jpg' />
        <h4 id="feature-text">Fast and reliable service on any equipment or machines</h4>
      </Grid.Column>
      <Grid.Column width={5}>
        <Image circular centered src='/assets/feature2.jpeg' />
        <h4 id="feature-text" style={{ textAlign: 'center' }}>24/7 Customer Service</h4>
      </Grid.Column>
      <Grid.Column width={5}>
        <Image circular centered src='/assets/feature3.png' />
        <h4 id="feature-text">Security and confidentiality are top priority</h4>
      </Grid.Column>
    </Grid>
  </div>
);

export default Features;