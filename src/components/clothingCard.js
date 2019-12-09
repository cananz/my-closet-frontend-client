import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'

class ClothingCard extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  selectItem = () => {
    this.props.toggleSelection(this.props.item)
  }


  render() {
    let {item, cardType, cardStyle} = this.props

    return (
        <Card onClick={this.selectItem}>
          {cardType === 'main' ?
            null
          :
          <Label
            icon='minus circle'
            color='orange'
            floating

          />
          }

          <Image src={item.image} />


        </Card>
    )
  }

}

export default ClothingCard
