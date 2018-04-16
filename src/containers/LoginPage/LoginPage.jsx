import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Grid, Header, Message, Container, Menu } from 'semantic-ui-react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Footer from '../../components/Footer/Footer';
import style from '../../components/Navbar/Navbar.css';
import './LoginPage.css';

const menuItemsLeft = [
  { key: 'home', exact: true, to: '/', content: 'MODEL Computing' },
];

const menuItemsRight = [
  { key: 'register', to: '/register', content: 'Register' },
  { key: 'login', to: '/login', content: 'Sign In' },
];

const LoginPage = () => (
  <div>
    <div className="Navbar-container" style={{ paddingBottom:'1.5em' }}>
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
    </div>
    <div id='LoginForm'>
      <Grid
        columns={1}
        centered
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column
          mobile={16}
          tablet={8}
          computer={6}
          textAlign="center"
          verticalAlign="middle"
        >
          <Header as="h1" content="Sign in" style={{ fontSize: '6em', color: '#CFCECE' }} />
          <LoginForm />
          <Message>
            New to MODEL Computing Service?&nbsp;
            <Link to="/register">Register</Link>&nbsp;instead.
          </Message>
        </Grid.Column>
      </Grid>
    </div>
    <Footer />
  </div>
);

export default LoginPage;