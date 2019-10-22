import React from 'react';
// import './App.css';
import AppHeader from './containers/header'
import Login from './containers/login'
// import SideNav from './containers/sideNav'
import ClosetContainer from './containers/closetContainer'
// import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: {username: 'clueless'},
      items: []
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

  render() {

    return (
      <div id='main' className='grid-container'>

        <AppHeader title={'My Closet'} />


        {this.state.currentUser ?
          <ClosetContainer currentUser={this.state.currentUser} />
          :
          <Login
            currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser} />
        }


      </div>



    )
  }
}





export default App;
