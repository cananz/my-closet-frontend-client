import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'

class ClothingCard extends React.Component {

  constructor(props) {
    super(props)
  }

  selectItem = () => {
    this.props.toggleSelection(this.props.item)
  }


  render() {
    let {item, cardType} = this.props

    return (
        <Card onClick={this.selectItem}>
          {cardType === 'main' ?
            <Label
              icon='add circle'
              color='grey'
              content={item.category.name}
            />
          :
          <Label
            icon='minus circle'
            color='pink'
          />
          }

          <Image src={item.image} />


        </Card>
    )
  }

}

export default ClothingCard
