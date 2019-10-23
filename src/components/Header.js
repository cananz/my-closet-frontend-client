import React from 'react';
import { Header, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const AppHeader = props => {

  return (

      <Header as='h1' block={true}>
        { props.title }
        <Menu secondary>

        <Menu.Item as={Link} to="/profile"
          name='profile'
          active={props.activeItem === 'profile'}
          onClick={props.handleHeaderClick}
         />

        <Menu.Item as={Link} to="/closet"
          name='closet'
          active={props.activeItem === 'closet'}
          onClick={props.handleHeaderClick}
         />

         <Menu.Item as={Link} to="/outfits"
           name='outfits'
           active={props.activeItem === 'outfits'}
           onClick={props.handleHeaderClick}
          />

        </Menu>
      </Header>

  )
}

export default AppHeader;
