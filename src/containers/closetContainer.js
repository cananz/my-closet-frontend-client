import React from 'react';
import { Container } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'
import ClothingCardsContainer from './clothingCardsContainer'
import ClothingFilter from './ClothingFilter'
import OutfitCardsContainer from './OutfitCardsContainer'
import NewOutfit from '../components/forms/NewOutfit'
const userURL = 'http://localhost:3000/users'

class ClothingContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      allClothes: [],
      outfits: [],
      filteredItems: [],
      selectedItems: [],
      addOutfitVisible: false
    }
  }

  componentDidMount() {
    const { id, items, outfits } = this.props.currentUser
    // fetch(`http://localhost:3000/users/${id}`)
    // .then(response => response.json())
    // .then(userData => {
      // console.log(userData)
      this.setState({
        allClothes: items,
        filteredItems: items,
        outfits: outfits
      })
    // }
    // )
  }

  addOutfit = () => {
    // e.preventDefault()
    const {addOutfitVisible} = this.state
    this.setState({addOutfitVisible: !addOutfitVisible })

  }

  toggleSelection = (item) => {
    console.log(item)
    // const {selectedItems} = this.state
    if (!this.state.selectedItems.find(x => x.id === item.id)) {
      this.setState({selectedItems: [...this.state.selectedItems, item]})
    } else {
      let removed = this.state.selectedItems.filter(x => x.id !== item.id)
      this.setState({selectedItems: removed})
    }



    // const check = this.state.selectedItems.includes(item) ?
    //   () => this.state.selectedItems
    // :

  }

  submitOutfit = () => {

    let itemIDs = this.state.selectedItems.map(item => item.id)

    // const itemObjArr = itemIDs.map(item => {
    //   // user_id: this.props.currentUser.id,
    //   item_id: item
    // })
    // console.log(itemIDs)
    let configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        items: itemIDs
      })
    }
    // debugger
    fetch(userURL + '/outfits', configObj)
    .then(response => response.json())
    .then(newOutfit => {
        console.log(newOutfit)
        let {outfits} = this.state

      this.setState({outfits: [...outfits, newOutfit] })
    }
    )
  }

  outfitClickHandler = (outfitObj) => {
    console.log(outfitObj)
  }

  filterItems = (catName) => {
    let filtered = this.state.allClothes.filter(item => item.category.name === catName)

    catName === 'all' ?
    this.setState({filteredItems: this.state.allClothes})
    :
    this.setState({filteredItems: filtered})
  }

  displayNewOutfitCard = () => <NewOutfit
      selectedItems={this.state.selectedItems}
      toggleSelection={this.toggleSelection}
      submitOutfitHandler={this.submitOutfit}
      />



  render() {




    return (
      <Container fluid textAlign='center'>
        {this.props.headerActiveItem === 'outfits' ?
          (this.state.addOutfitVisible ?
            <Container fluid={true} textAlign='center'>
              <NewOutfit
                  selectedItems={this.state.selectedItems}
                  toggleSelection={this.toggleSelection}
                  submitOutfitHandler={this.submitOutfit}
                  />
              <ClothingCardsContainer
                items={this.state.filteredItems}
                selectedItems={this.state.selectedItems}
                toggleSelection={this.toggleSelection} />
            </Container>

          :

        <Container fluid={true} textAlign='center'>
          <OutfitCardsContainer
            outfits={this.state.outfits}
            addOutfit={this.addOutfit}
            outfitClickHandler={this.outfitClickHandler} />

        </Container>)

        :

          <Container fluid={true} textAlign='center'>
            <ClothingFilter
              handleFilter={this.filterItems} />
            <ClothingCardsContainer
              items={this.state.filteredItems}
              selectedItems={this.state.selectedItems}
              toggleSelection={this.toggleSelection} />
          </Container>

        }




      </Container>
    )
  }
}

export default ClothingContainer;








// {/* {this.state.selectedItems.length > 0 ?
//   (<NewOutfit
//   selectedItems={this.state.selectedItems}
//   toggleSelection={this.toggleSelection}
//   submitOutfitHandler={this.submitOutfit}
//   />)
// :
// null
// } */}
