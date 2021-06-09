import React from 'react'
import { Button, Container, Menu } from "semantic-ui-react"

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="HRMS" />
          <Menu.Item name="employers" />
          <Menu.Item name="candidates" />
          <Menu.Item name="job advertisements" />
          <Menu.Item name="my profile" />

          <Menu.Menu position="right">
            <Menu.Item>
            <Button.Group>
    <Button>Sign Up</Button>
    <Button.Or />
    <Button positive>Log In</Button>
  </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
        </div>
    )
}