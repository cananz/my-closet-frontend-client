import React from 'react';
import { Container } from 'semantic-ui-react'
import ClothingCardsContainer from './clothingCardsContainer'
import ClothingFilter from './ClothingFilter'
import OutfitCardsContainer from './OutfitCardsContainer'
import NewOutfit from '../components/NewOutfit'
const userURL = 'http://localhost:3000/users/1'

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
    fetch(userURL)
    .then(response => response.json())
    .then(userData =>
      this.setState({
        allClothes: userData.items,
        filteredItems: userData.items,
        outfits: userData.outfits
      }))
  }

  addOutfit = (e) => {
    e.preventDefault()
    this.setState({addOutfitVisible: !this.state.addOutfitVisible })
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
      <Container fluid={true}>
        {this.props.headerActiveItem === 'outfits' ?
        <Container fluid={true}>

          <OutfitCardsContainer
            outfits={this.state.outfits}
            addOutfit={this.addOutfit}
            outfitClickHandler={this.outfitClickHandler} />

            {this.state.addOutfitVisible ?
            () => this.displayNewOutfitCard()
            :
              null
            }
        </Container>
        :
          <Container fluid={true}>
            <ClothingFilter
              handleFilter={this.filterItems} />
            <ClothingCardsContainer
              items={this.state.filteredItems}
              selectedItems={this.state.selectedItems}
              toggleSelection={this.toggleSelection} />
          </Container>
        }

        {/* {this.state.selectedItems.length > 0 ?
          (<NewOutfit
          selectedItems={this.state.selectedItems}
          toggleSelection={this.toggleSelection}
          submitOutfitHandler={this.submitOutfit}
          />)
        :
        null
        } */}


      </Container>
    )
  }
}

export default ClothingContainer;
