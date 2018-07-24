import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Icon,
  Label,
  List,
  Segment,
  Transition
} from 'semantic-ui-react';
import myImage from '../images/wireframe/Avatar.JPG';


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

                <Header as='h3' color='grey'>
                  <Icon.Group>
                    <Icon file='true' name='file alternate outline' />
                  </Icon.Group>
                  Qualification Profile
                <Divider />
                </Header>
                <p>Creative and motivated Electrical Engineering honours graduate with expertise in research
                  and project support and proven ability as <strong>Web developer</strong>.</p>
                  <List as='ul'>
                    <List.Item as='li'><strong>Web Development:</strong> Skilled in design and passionate about creation of highly-functional,
                      user-friendly web sites with user-engaging graphics and features. </List.Item>
                    <List.Item as='li'><strong>Troubleshooting and Issue Resolution:</strong> Adept at conducting detailed troubleshooting to diagnose issues
                      and develop innovative resolutions for academic and web development projects.</List.Item>
                    <List.Item as='li'>
                      <strong>Teamwork:</strong> Leverage ability to quickly learn and implement new systems
                      and processes with strong interpersonal skills to collaborate with team members and project managers to achieve targeted goals.
                    </List.Item>
                    <List.Item as='li'><strong>Key Strengths:</strong> Detail-oriented and proficient in completion of assigned tasks, compile accurate and comprehensive documentation of research and projects,
                      and contribute insightful and creative recommendations for advancing successful project completions.</List.Item>
                  </List>

                  <Header as='h3' color='grey'>
                    <Icon.Group>
                      <Icon name='keyboard outline' />
                    </Icon.Group>
                    Work Experience
                <Divider />
                </Header>
                <List as='ul'>
                  <List.Item as='li'><strong>Crypto Day Trader, 2017 – Present: </strong><br />
                  Buy and sell numerous pairs of cryptocurrency daily on various exchanges with positions closed before end of trading day.
                  Analyse currency trends and past performance charts  to define trading strategies and execute transactions to minimise risk and optimise profits.
                  </List.Item>
                  <List.Item as='li'>
                    <strong>University of Victoria, Victoria, BC. Research Assistant, 2013 - 2016: </strong><br />
                    Conducted laboratory research tasks in collaboration with colleagues and supervisor. Primary research focused on design and development of energy harvester.
                    Conducted programming, troubleshooting, and testing to support research. Maintained and calibrated electronic equipment,
                    debugged and tested computer software and hardware, and documented completed tasks.
                    Operated oscilloscopes and other types of apparatus and designed tests and performed analyses of electric circuits on circuit boards.
                  </List.Item>
                  <List.Item as='li'>
                    <strong>University Café, Harbin, China.	Food Deliverer, 2012 - 2013: </strong><br />
                    Delivered lunch and dinner meals to students throughout campus Monday through Wednesday each week. Took customized meal orders via telephone.
                  </List.Item>
                </List>

                <Header as='h3' color='grey'>
                  <Icon.Group>
                    <Icon name='code' />
                  </Icon.Group>
                  Skills
              <Divider />
              <Label.Group color='blue'>
                <Label as='a'>HTML</Label>
                <Label as='a'>CSS</Label>
                <Label as='a'>JavaScript</Label>
                <Label as='a'>React</Label>
                <Label as='a'>SemanticUI</Label>
                <Label as='a'>Node.js</Label>
                <Label as='a'>Express</Label>
                <Label as='a'>MongoDB</Label>
                <Label as='a'>Git</Label>
                <Label as='a'>Gulp</Label>
                <Label as='a'>JQuery</Label>
                <Label as='a'>Bootstrap</Label>
                <Label as='a'>Responsive</Label>
                <Label as='a'>ES6</Label>
              </Label.Group>
              </Header>

                <Header as='h3' color='grey'>
                  <Icon.Group>
                    <Icon name='graduation cap' />
                  </Icon.Group>
                  Education
              <Divider />
              </Header>
              <List as='ul'>
                <List.Item as='li'>
                  <strong>Master of Engineering in Electrical Engineering 2013– 2016</strong><br />
                  University of Victoria, Victoria, BC  Honours Graduate<br />
                  Course: Advanced Photonics, Bio-Photonics, Optical Communication Technology,
                  Information Theory, Antennas, Propagation,etc.
                </List.Item>
                <List.Item as='li'>
                  <strong>Bachelor of Engineering in Electrical Engineering 2009– 2013</strong><br />
                  Harbin Engineering University, Harbin, China<br />
                  Course: Analog Electronics, Digital Electronics, Signal and System, DSP, Field and Waves of Electromagnetics,etc.
                </List.Item>
              </List>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
       </Container>
    </div>
  );
};

export default Resume;
