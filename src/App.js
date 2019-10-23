import React from 'react';
import { Container } from 'semantic-ui-react'
// import './App.css';
import AppHeader from './components/Header'
import Login from './components/forms/login'
// import SideNav from './containers/sideNav'
import ClosetContainer from './containers/closetContainer'
// import OutfitContainer from './containers/outfitsContainer'
import { Route, Switch, Redirect } from 'react-router-dom';
import Profile from './components/Profile'


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
          console.log('SUCCESSFULLY LOGGED IN', loginData.first_name)
          this.setCurrentUser(loginData)
        }
      })

  //   // console.log('trying to login ' + e.target.value)
  //   console.log()
  }

  setCurrentUser = (userObj) => {
    this.setState({
      currentUser: userObj,
      headerActiveItem: 'profile',
      items: userObj.items
    })
  }

  handleHeaderClick = (e, {name}) => {
    this.setState({headerActiveItem: name})
  }



  render() {

    let loggedIn = !!this.state.currentUser
    // let {currentUser} = this.state

    return (
      <Container fluid={true} >
        <AppHeader
          activeItem={this.state.headerActiveItem}
          handleHeaderClick={this.handleHeaderClick}
          title={'My Closet'}
          currentUser={this.state.currentUser}
        />

        <Switch>


          <Route exact path='/profile' render={() => loggedIn ? <Profile
            currentUser={this.state.currentUser} /> : <Redirect to="/login" /> } />

          <Route exact path='/closet' render={() => loggedIn ? <ClosetContainer
            headerActiveItem={this.state.headerActiveItem}
            currentUser={this.state.currentUser} /> : <Redirect to="/login" /> } />

          <Route exact path='/outfits' render={() => loggedIn ?
            <ClosetContainer
            headerActiveItem={this.state.headerActiveItem}
            currentUser={this.state.currentUser} /> : <Redirect to="/login" />
          } />

          <Route exact path="/login" render={ () => loggedIn ? <Redirect to="/profile" /> : <Login  handleLoginSubmit={this.handleLoginSubmit} /> } />

          <Route exact path="/" render={ () => loggedIn ?
            <Redirect to="/profile" /> : <Redirect to="/login" /> }
          />


        </Switch>

      </Container>








    )
  }
}


// <Route exact path="/" component={this.state.currentUser ? ClosetContainer : Login } />
// <Route exact path="/login" component={Login} />

{/* <Route exact path="/" render={(props) => <Redirect to="/login" />} /> */}



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









// {/* {this.state.currentUser ?
//
//   <ClosetContainer
//     headerActiveItem={this.state.headerActiveItem}
//     currentUser={this.state.currentUser}
//   />
//   :
//   <Login
//   currentUser={this.state.currentUser}
//   handleLoginSubmit={this.handleLoginSubmit} />
// } */}
