import React from 'react'
import { Card, Button, Container, Segment } from 'semantic-ui-react'
import ClothingCard from '../clothingCard'


const NewOutfit = props => {

  return (
    <Segment inverted color="orange">
      <Card fluid>
        <Card.Content>
          <Button
            floated="left"
            circular
            icon="x"
            onClick={props.addOutfitToggle}
          />

          <Card.Header>New Outfit</Card.Header>


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

        </Card.Content>
        <Card.Content>
          {props.selectedItems.length > 0 ?
            <Button
              onClick={props.submitOutfitHandler}
              content="Add Outfit"
            />
          :
          <Card.Meta content="Select Items to Add To Outfit" />

          }


        </Card.Content>

      </Card>
    </Segment>
  )

}

export default NewOutfit
