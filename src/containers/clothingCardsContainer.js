import React from 'react'
import ClothingCard from '../components/clothingCard'
// import { Card, Placeholder } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

class ClothingCardsContainer extends React.Component {




  render() {
    return (
      <Card.Group itemsPerRow={4}>
        {this.props.items.map(item =>
          <ClothingCard key={item.id} item={item} />
        )}
      </Card.Group>
  )}
}

export default ClothingCardsContainer




// {this.state.filteredItems.map(item => <ClothingCard key={item.id} item={item} />)}










{/* <Card.Group itemsPerRow={4}>
  <Card
    raised={true}>
    <Card.Content>
      <Placeholder>
        <Placeholder.Image square />
      </Placeholder>
    </Card.Content>
  </Card>
</Card.Group> */}
