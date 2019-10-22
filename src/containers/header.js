import React from 'react';
import { Header } from 'semantic-ui-react'

const AppHeader = props => {

  return (

      <Header as='h1' block={true}>{ props.title }</Header>
  )
}

export default AppHeader;
