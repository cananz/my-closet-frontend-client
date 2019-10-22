import React from 'react';
import { Header, Menu } from 'semantic-ui-react'

const AppHeader = props => {

  return (

      <Header as='h1' block={true}>
        { props.title }
        <Menu secondary>
        <Menu.Item
          name='closet'
          active={props.activeItem === 'closet'}
          onClick={props.handleHeaderClick}
         />

         <Menu.Item
           name='outfits'
           active={props.activeItem === 'outfits'}
           onClick={props.handleHeaderClick}
          />
          
        </Menu>
      </Header>

  )
}

export default AppHeader;
