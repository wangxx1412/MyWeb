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
              myResume
            </Menu.Item>


            <Menu.Menu position='right'>

              <Menu.Item name='github' href='//github.com/wangxx1412/myweb'>
                <Icon inverted  fitted name='github' />
              </Menu.Item>
              <Menu.Item name='linkedin' href='https://www.linkedin.com/in/xiaoxuan-wang-449a5998/'>
                <Icon inverted  fitted name='linkedin in' />
              </Menu.Item>

              <Menu.Item>
                <Button size="small" href='mailto:wangxiaoxuan48692gmail.com' inverted color="blue">
                  Contact Me
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
