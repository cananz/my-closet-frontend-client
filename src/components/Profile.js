import React from 'react'
import { Container, Card, Image } from 'semantic-ui-react'

const Profile = (props) => {
  console.log('props for Profile component are: ', props)
  let { currentUser } = props
  return (
    <Card centered={true}>
      <Card.Content>
        <Card.Header>{`${currentUser.username}`}</Card.Header>
      </Card.Content>
    </Card>

  )
}

export default Profile
