import React from 'react';
import Scrollchor from 'react-scrollchor';
import { Link } from 'react-router-dom';
import { Container, Grid, List, Header, Segment, Button } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em', background: '#000000' }}>
    <Container>
      <Grid stackable divided inverted>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h4" content='MODEL Computing Service' inverted />
            <List link inverted>
              <List.Item as={Scrollchor} to='#' content='Home' />
              <List.Item as={Scrollchor} to='#about' content='About MODEL' />
              <List.Item as={Scrollchor} to='#features' content='Features' />
              <List.Item as={Link} to='/login' content='Sign in' />
              <List.Item as={Link} to='/register' content='Register' />
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h4" content='Services' inverted />
            <List link inverted>
              <List.Item content='IT Services' />
              <List.Item content='24/7 Customer Support' />
              <List.Item content='Easy Request' />
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h4" content="Email us at" inverted />
            <List link inverted>
              <List.Item>services@modelcomputing.com</List.Item>
              <List.Item>michael@modelcomputing.com</List.Item>
              <List.Item>kenny@modelcomputing.com</List.Item>
              <List.Item>matthew@modelcomputing.com</List.Item>
              <List.Item>jonathan@modelcomputing.com</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <List link inverted horizontal>
              <List.Item>
                <Button
                  href="https://github.com/mchri18/4330-it-service"
                  circular
                  color="black"
                  icon="github"
                />
              </List.Item>
              <List.Item>
                <Button
                  as={Link}
                  to="/"
                  circular
                  color="facebook"
                  icon="facebook"
                />
              </List.Item>
              <List.Item>
                <Button circular color="twitter" icon="twitter" />
              </List.Item>
              <List.Item>
                <Button circular color="linkedin" icon="linkedin" />
              </List.Item>
              <List.Item>
                <Button circular color="google plus" icon="google plus" />
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;