import React from 'react';
import './App.css';
import Header from './containers/header'
import SideNav from './containers/sideNav'
import ClosetContainer from './containers/closetContainer'



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: null,
      items: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/users/1')
    .then(r => r.json())
    .then(userData => {
      this.setState({items: userData.items})
      // console.log(userData.items)
    })
  }


  render() {

    return (
      <div id='main' className='grid-container'>
        <Header title={'My Closet'} />
        <SideNav />
        <ClosetContainer items={this.state.items} />

      </div>



    )
  }
}





export default App;
