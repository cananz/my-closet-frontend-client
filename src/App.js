import React from 'react';
import { Container } from 'semantic-ui-react'
// import './App.css';
import AppHeader from './containers/header'
import Login from './containers/login'
// import SideNav from './containers/sideNav'
import ClosetContainer from './containers/closetContainer'
// import OutfitContainer from './containers/outfitsContainer'
import { Route } from 'react-router-dom';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: null,
      items: [],
      headerActiveItem: '',
    }
  }

  // componentDidMount() {
  //
  // }



  handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log('trying to log in', e.target.username.value)
    fetch('http://localhost:3000/login', {

    // fetch(`http://localhost:3000/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: e.target.username.value
      })})
      .then(r => r.json())
      .then(loginData => {
        if(loginData.error) {
          alert(loginData.error)
        } else {
          console.log('SUCCESSFULLY LOGGED IN', loginData)
          this.setCurrentUser(loginData)
        }
      })

  //   // console.log('trying to login ' + e.target.value)
  //   console.log()
  }

  setCurrentUser = (userObj) => {
    this.setState({currentUser: userObj, headerActiveItem: 'closet'})
  }

  handleHeaderClick = (e, {name}) => {
    this.setState({headerActiveItem: name})
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
            />
            :
            <Login
            currentUser={this.state.currentUser}
            handleLoginSubmit={this.handleLoginSubmit} />
          }



</Container>



    )
  }
}


// <Route exact path="/" component={this.state.currentUser ? ClosetContainer : Login } />
// <Route exact path="/login" component={Login} />




// <Login
//   currentUser={this.state.currentUser}
//   handleLoginSubmit={this.handleLoginSubmit}
// />



// {this.state.currentUser ?
//
//   <ClosetContainer
//   headerActiveItem={this.state.headerActiveItem}
//   currentUser={this.state.currentUser}
//   setAllItems={this.setAllItems}
//   allItems={this.state.allItems}
//   />
//
//   :
//   <Login
//   currentUser={this.state.currentUser}
//   setCurrentUser={this.setCurrentUser} />
// }



export default App;
