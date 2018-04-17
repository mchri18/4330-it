import React from 'react';
import Scrollchor from 'react-scrollchor';
import { Link } from 'react-router-dom';
import { Container, Grid, List, Header, Segment, Button } from 'semantic-ui-react';

const ManFooter = () => (
    <Segment inverted vertical style={{ padding: '5em 0em', background: '#000000' }}>
        <Container>
            <Grid stackable divided inverted>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Header as="h4" content='MODEL Computing Service' inverted />
                        <List link inverted>
                            <List.Item as={Scrollchor} to='#' content='Top' />
                            <List.Item as={Scrollchor} to='#techtracker' content='Technician Tracker' />
                            <List.Item as={Scrollchor} to='#queuedisplay' content='Queue Display' />
                            <List.Item as={Scrollchor} to='#reports' content='Reports' />
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
                        <Header as="h4" content="Email Technicians" inverted />
                        <List link inverted>
                            <List.Item>Tim.A@modelcomputing.com</List.Item>
                            <List.Item>Bob.T.B@modelcomputing.com</List.Item>
                            <List.Item>Ryan.H@modelcomputing.com</List.Item>
                            <List.Item>Rick.S@modelcomputing.com</List.Item>
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

export default ManFooter;
