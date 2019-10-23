import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'

class ClothingCard extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   selected: false
    // }

  }

  selectItem = () => {
    // this.setState({selected: !this.state.selected})
    this.props.toggleSelection(this.props.item)
  }

  render() {
    let {item, cardType} = this.props

    return (
        <Card>
          {cardType === 'main' ?
            <Label
              icon='add circle'
              color='grey'
              onClick={this.selectItem}
              content={item.category.name} />
          :
            <Label
            icon='minus circle'
            color='pink'
            onClick={this.selectItem}/>
          }

          <Image src={item.image} />


        </Card>
    )
  }

}

export default ClothingCard




{/* <div className="grid-card clothing-item">

  <img className="card-image"
    src={item.image} />

  </div> */}
