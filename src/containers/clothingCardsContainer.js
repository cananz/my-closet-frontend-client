import React from 'react'
import ClothingCard from '../components/clothingCard'
import { Card } from 'semantic-ui-react'

class ClothingCardsContainer extends React.Component {




  render() {
    const {items, toggleSelection, selectedItems} = this.props
    return (



      <Card.Group centered stackable>
        {items.map(item =>
          <ClothingCard
            key={`closet-item-card-${item.id}`}
            item={item}
            toggleSelection={toggleSelection}
            cardType="main"
          />
        )}
      </Card.Group>
  )}
}

export default ClothingCardsContainer




// {this.state.filteredItems.map(item => <ClothingCard key={item.id} item={item} />)}










// {/* <Card.Group itemsPerRow={4}>
//   <Card
//     raised={true}>
//     <Card.Content>
//       <Placeholder>
//         <Placeholder.Image square />
//       </Placeholder>
//     </Card.Content>
//   </Card>
// </Card.Group> */}
