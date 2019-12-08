import React from 'react'
import { Container, Card, Image } from 'semantic-ui-react'

const Profile = (props) => {
  console.log('props for Profile component are: ', props)
  let { first_name, last_name, username } = props.currentUser
  return (

    <Card centered>
      <Card.Content>
        <Card.Header textAlign='center'>{`${first_name} ${last_name}`}</Card.Header>

      </Card.Content>
      <Card.Content extra>
      <Card.Header>{username}</Card.Header>
      </Card.Content>
    </Card>




  )
}

export default Profile
