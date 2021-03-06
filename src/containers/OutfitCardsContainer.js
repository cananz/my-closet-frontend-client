import React from 'react'
import OutfitCard from '../components/OutfitCard'
import { Card, Icon } from 'semantic-ui-react'

class OutfitCardsContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Card.Group centered>
        {this.props.outfits.map(outfit =>
          <OutfitCard
            key={`outfit-id-${outfit.id}`}
            outfit={outfit}
            clickHandler={this.props.outfitClickHandler}
            deleteOutfit={this.props.deleteOutfit}
          />
        )}


        <Card
          onClick={this.props.addOutfit}>
          <Card.Content textAlign='center'>
            <Icon name='add' size='big' />
            <Card.Meta>Create New Outfit</Card.Meta>
          </Card.Content>
        </Card>


      </Card.Group>
    )
  }

}

export default OutfitCardsContainer
