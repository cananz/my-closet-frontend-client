import React from 'react'

class ClothingCard extends React.Component {

  // constructor(props) {
  //   super(props)
  //
  // }

  render() {
    let {item} = this.props

    return (
      <div id={item.id} className="grid-card clothing-item">
        <img className="card-image"
          src={item.image}
          alt={item.id} />

      </div>

    )
  }

}

export default ClothingCard
