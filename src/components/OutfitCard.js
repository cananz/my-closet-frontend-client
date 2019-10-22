import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'

const OutfitCard = props => {
  const {items} = props.outfit
  return (
    <Card onClick={() => props.clickHandler(props.outfit)}>
      <Image.Group size='tiny'>
        {items.map(item =>
          <Image
            src={item.image}
            key={`item${item.id}`}
            alt={'lookin good'}
          />)}
      </Image.Group>
      <Card.Content extra>
        <Label tag={true} content={`${items.length} pieces`} />
      </Card.Content>

    </Card>
  )
}

export default OutfitCard
