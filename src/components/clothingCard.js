import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class ClothingCard extends React.Component {

  // constructor(props) {
  //   super(props)
  //
  // }

  render() {
    let {item} = this.props

    return (
        <Card>
          <Image src={item.image} wrapped ui={false} />
          <Card.Meta>{item.category.name}</Card.Meta>
        </Card>
    )
  }

}

export default ClothingCard




{/* <div className="grid-card clothing-item">

  <img className="card-image"
    src={item.image} />

  </div> */}
