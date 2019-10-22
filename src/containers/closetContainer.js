import React from 'react';
import { Container } from 'semantic-ui-react'
import ClothingCardsContainer from './clothingCardsContainer'
import SideNav from './sideNav'
const userURL = 'http://localhost:3000/users/1'

class ClothingContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      allClothes: [],
      outfits: [],
      filteredItems: []
    }
  }

  componentDidMount() {
    fetch(userURL)
    .then(response => response.json())
    .then(userData =>
      this.setState({
        allClothes: userData.items,
        filteredItems: userData.items
      }))
  }

  filterItems = (catName) => {
    let filtered = this.state.allClothes.filter(item => item.category.name == catName)
    this.setState({filteredItems: filtered})
    // console.log(this.props.items)
    // console.log(catName)
  }


  render() {
    return (
        <Container>

          <SideNav />
            <ClothingCardsContainer
               items={this.state.filteredItems} />

      </Container>
    )
  }
}

export default ClothingContainer;
