import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from "semantic-ui-react"

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="HRMS"/>
          <Menu.Item name="employers" as={NavLink} to="/employers"/>
          <Menu.Item name="candidates" as={NavLink} to="/candidates"/>
          <Menu.Item name="job advertisements" as={NavLink} to="/jobAdvertisements"/>
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