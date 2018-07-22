import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from 'semantic-ui-react';
import myImage from '../images/wireframe/Avatar.JPG';
import mypar from '../images/wireframe/centered-paragraph.png';

const Resume = () => {
  return (
    <div>
       <Container style={{ marginTop: '7em' }}>
         <Header as='h1'>Resume</Header>
         <Grid>
           <Grid.Row>
            <Grid.Column width={5}>
              <Segment raised color='blue'>
                <Container>
                  <Image centered src={myImage} size='small' circular />
                  <Header as='h2' textAlign='center'>
                    Xiaoxuan Wang
                    <Divider />

                    <Header.Subheader>
                      <List>
                        <List.Item>
                          <List.Icon mail='true' name='mail' />
                          <List.Content>
                            wangxiaoxuan4869@gmail.com
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon github='true' name='github' />
                          <List.Content>
                            https://github.com/wangxx1412
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon location='true' name='location arrow' />
                          <List.Content>
                            Victoria, BC, Canada
                          </List.Content>
                        </List.Item>
                      </List>
                    </Header.Subheader>
                    <Divider />
                  </Header>
                </Container>
              </Segment>
            </Grid.Column>
            <Grid.Column width={11}>
              <Segment raised color='blue'>
              <Image src={mypar} />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
       </Container>
    </div>
  );
};

export default Resume;
