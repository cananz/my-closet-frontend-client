import React from 'react'
import { Card, Image, Label, Grid, Icon } from 'semantic-ui-react'

const OutfitCard = props => {
  const {items} = props.outfit
  return (
    <Card>

      {/* <Card onClick={() => props.clickHandler(props.outfit)}> */}

      <Card.Content>
        <Image.Group size='tiny'>
          {items.map(item =>
            <Image
              src={item.image}
              key={`outfit-item-${item.id}`}
              alt={'lookin good'}

            />
          )}
        </Image.Group>

      </Card.Content>



      

      <Card.Content extra>

        <Label tag={true} content={`${items.length} pieces`} />
        {/* <Label color="red" content="X" floated="right" /> */}
        <Label as="a" onClick={() => props.deleteOutfit(props.outfit.id)}>
          <Icon color="orange" name="trash" />
          Delete
        </Label>

      </Card.Content>

    </Card>
  )
}

export default OutfitCard
