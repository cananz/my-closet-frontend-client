import React from 'react';
import { Container } from 'semantic-ui-react'
// import './App.css';
import AppHeader from './containers/header'
import Login from './containers/login'
// import SideNav from './containers/sideNav'
import ClosetContainer from './containers/closetContainer'
// import OutfitContainer from './containers/outfitsContainer'
// import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: {username: 'clueless'},
      // items: [],
      headerActiveItem: 'closet',
      allItems: []
    }
  }

  componentDidMount() {

  }


  // handleLoginSubmit = (e) => {
  //   e.preventDefault()
  //   // console.log('trying to login ' + e.target.value)
  //   console.log()
  // }

  setCurrentUser = (userObj) => {
    this.setState({currentUser: userObj})
  }

  handleHeaderClick = (e, {name}) => {
    this.setState({headerActiveItem: name})
  }

  setAllItems = (items) => {
    this.setState({allItems: items})
  }

  render() {

    return (
<Container fluid={true} >
        <AppHeader
          activeItem={this.state.headerActiveItem}
          handleHeaderClick={this.handleHeaderClick}
          title={'My Closet'} />


        {this.state.currentUser ?

            <ClosetContainer
              headerActiveItem={this.state.headerActiveItem}
              currentUser={this.state.currentUser}
              setAllItems={this.setAllItems}
              allItems={this.state.allItems}
            />

          :
          <Login
            currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser} />
        }

</Container>



    )
  }
}





export default App;
