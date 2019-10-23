import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import ClothingCard from '../clothingCard'


const NewOutfit = props => {

  return (
    <Card fluid color='orange'>
      <Card.Content>
        <Card.Header>New Outfit</Card.Header>
        <Card.Meta>Select Items to Add To Outfit</Card.Meta>
          <Card.Group itemsPerRow={8}>
            {props.selectedItems.map(item =>
              <ClothingCard
                key={item.id}
                item={item}
                toggleSelection={props.toggleSelection}
                cardType="secondary"
              />
            )}
          </Card.Group>
          <Card.Content extra>
          <Button
            onClick={props.submitOutfitHandler}
            floated='right'>Complete Outfit!</Button>
        </Card.Content>
      </Card.Content>

    </Card>
  )

}

export default NewOutfit
