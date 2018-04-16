import React from 'react';
import { Grid, Message, Header, Menu, Container } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import Footer from '../../components/Footer/Footer';
import style from '../../components/Navbar/Navbar.css';
import './RegistrationPage.css';

const menuItemsLeft = [
  { key: 'home', exact: true, to: '/', content: 'MODEL Computing' },
];

const menuItemsRight = [
  { key: 'register', to: '/register', content: 'Register' },
  { key: 'login', to: '/login', content: 'Sign in' },
];

const RegisterPage = () => (
  <div>
    <nav className="Navbar-container" style={{ paddingBottom: '1.5em' }}>
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
    <div id="registerPage">
      <Grid
        columns={1}
        centered
        verticalAlign='middle'
        style={{ height: '100vh' }}
      >
        <Grid.Column
          mobile={16}
          computer={6}
          tablet={8}
          textAlign='center'
          verticalAlign='middle'
        >
          <Header as="h1" content="Sign Up" style={{ fontSize: '6em', color: '#CFCECE' }} />
          <RegisterForm />
          <Message>
            Already signed up?&nbsp;
        <Link to="/login">Sign in</Link>&nbsp;instead.
      </Message>
        </Grid.Column>
      </Grid>
    </div>
    <Footer />
  </div>
)

export default RegisterPage;