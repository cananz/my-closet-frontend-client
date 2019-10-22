import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      username: ""
    }
  }

  // componentDidMount() {
  //
  // }

  handleLoginChange = (e) => {
    this.setState({username: e.target.value})
    console.log(e.target.value)
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.username)
    
    // console.log(e)
  }

  render() {
    // let {currentUser} = this.state


    return (

        <form onSubmit={this.handleLoginSubmit} >
          <label>
            username:
            <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleLoginChange} />
          </label>
          <input type="submit" value="Login" />
        </form>


    )
  }

}


export default Login
