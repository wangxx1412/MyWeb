import React, { Component } from "react";
import {
  Button,
  Container,
  Icon,
  Menu
} from 'semantic-ui-react';

class FixedHeader extends Component {
  render(){
    return(
      <div>
        <Menu size="large" fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              myBING
            </Menu.Item>

            <Menu.Item as='a'>Blog</Menu.Item>

            <Menu.Item as='a'>Resume</Menu.Item>

            <Menu.Menu position='right'>

              <Menu.Item name='github' href='//github.com/wangxx1412/myweb'>
                <Icon inverted  fitted name='github' />
              </Menu.Item>
              <Menu.Item name='linkedin' href='https://www.linkedin.com/in/xiaoxuan-wang-449a5998/'>
                <Icon inverted  fitted name='linkedin in' />
              </Menu.Item>

              <Menu.Item>
                <Button size="small" inverted color="blue">
                  Sign Up
                </Button>
              </Menu.Item>

              <Menu.Item>
                <Button size="small" inverted color="grey">
                  Login
                </Button>
              </Menu.Item>

            </Menu.Menu>
    </Container>
  </Menu>
</div>
    )
  }
}

export default FixedHeader;
