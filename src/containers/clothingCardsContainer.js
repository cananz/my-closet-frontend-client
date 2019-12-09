import React from 'react'
import ClothingCard from '../components/clothingCard'
import { Card } from 'semantic-ui-react'

class ClothingCardsContainer extends React.Component {




  render() {
    const {items, toggleSelection, selectedItems, closet} = this.props
    return (



      <Card.Group centered stackable>

        {items.map(item =>
          <ClothingCard
            key={`closet-item-card-${item.id}`}
            item={item}
            toggleSelection={toggleSelection}
            cardType="main"
            cardStyle={closet}
          />
        )}

      </Card.Group>
  )}
}

export default ClothingCardsContainer
