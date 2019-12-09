import React from 'react';
import { Container } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'
import ClothingCardsContainer from './clothingCardsContainer'
import ClothingFilter from './ClothingFilter'
import OutfitCardsContainer from './OutfitCardsContainer'
import NewOutfit from '../components/forms/NewOutfit'
const userURL = 'http://localhost:3000/users'
const outfitURL = 'http://localhost:3000/outfits'


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
      this.setState({
        allClothes: items,
        filteredItems: items,
        outfits: outfits
      })
  }

  addOutfit = () => {
    // e.preventDefault()
    const {addOutfitVisible} = this.state
    this.setState({
      addOutfitVisible: !addOutfitVisible,
      selectedItems: []
     })
  }

  toggleSelection = (item) => {
    if (!this.state.selectedItems.find(x => x.id === item.id)) {
      this.setState({selectedItems: [...this.state.selectedItems, item]})
    } else {
      let removed = this.state.selectedItems.filter(x => x.id !== item.id)
      this.setState({selectedItems: removed})
    }
  }

  submitOutfit = () => {
    let itemIDs = this.state.selectedItems.map(item => item.id)

    let configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        items: itemIDs,
        user_id: this.props.currentUser.id
      })
    }

    fetch(`${outfitURL}`, configObj)
    .then(response => response.json())
    .then(newOutfits => {

      this.setState({
        outfits: newOutfits,
        addOutfitVisible: false,
        selectedItems: []
      })
    })
  }

  deleteOutfit = (outfitId) => {
    let configObj = {
      method: 'DELETE',
      headers:  {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      }
    }

    fetch(`${outfitURL}/${outfitId}`, configObj)
    .then(response => response.json())
    .then(returnObj => {

      this.setState({outfits: returnObj})
    })
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
      addOutfitToggle={this.addOutfit}
      />

  render() {

    return (
      <Container fluid textAlign='center'>
        {this.props.headerActiveItem === 'outfits' ?

          (this.state.addOutfitVisible ?
            <Container fluid={true} textAlign='center' className="outfit-form">
              <NewOutfit
                selectedItems={this.state.selectedItems}
                toggleSelection={this.toggleSelection}
                submitOutfitHandler={this.submitOutfit}
                addOutfitToggle={this.addOutfit}
              />
              <ClothingCardsContainer
                items={this.state.filteredItems}
                selectedItems={this.state.selectedItems}
                toggleSelection={this.toggleSelection}
                closet={false}
              />
            </Container>
          :
          <Container fluid={true} textAlign='center' className="outfits">
            <OutfitCardsContainer
              outfits={this.state.outfits}
              addOutfit={this.addOutfit}
              outfitClickHandler={this.outfitClickHandler}
              deleteOutfit={this.deleteOutfit}
            />
          </Container>)
        :
        <Container fluid={true} textAlign='center' className="closet-items">
          <ClothingFilter handleFilter={this.filterItems} />
          <ClothingCardsContainer
            items={this.state.filteredItems}
            selectedItems={this.state.selectedItems}
            toggleSelection={this.toggleSelection}
            closet={true}
          />
        </Container>

        }

      </Container>
    )
  }
}

export default ClothingContainer;
