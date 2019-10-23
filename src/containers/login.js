import React from 'react';
import { Container, Form, Card } from 'semantic-ui-react'

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

  // handleLoginSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(this.state.username)
  //
  //   // console.log(e)
  // }

  render() {
    // let {currentUser} = this.state


    return (
      <Card centered={true}>
        <Card.Content>
          <Card.Header>LogIn</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Form onSubmit={this.props.handleLoginSubmit}>
            <Form.Group>

              <Form.Input
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleLoginChange} />

              <Form.Button content="login" />
            </Form.Group>
          </Form>
        </Card.Content>
      </Card>

    )
  }

}


export default Login
