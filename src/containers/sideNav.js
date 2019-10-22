import React from 'react';
import { Menu } from 'semantic-ui-react'

class ClothingFilter extends React.Component {

  constructor(props) {
    super(props)
    this.state = { activeTab: 'all' }

  }

  handleFilterClick = (e, { name }) => {
    e.preventDefault()
    this.props.handleFilter(name)
    this.setState({ activeTab: name })
  }

  render() {

    const { activeTab } = this.state

    return (
      <Menu tabular>
      <Menu.Item
        name='all'
        active={activeTab === 'all'}
        onClick={this.handleFilterClick} />

      <Menu.Item
        name='top'
        active={activeTab === 'top'}
        onClick={this.handleFilterClick} />

      <Menu.Item
        name='bottom'
        active={activeTab === 'bottom'}
        onClick={this.handleFilterClick} />

      <Menu.Item
        name='shoes'
        active={activeTab === 'shoes'}
        onClick={this.handleFilterClick} />

      <Menu.Item
        name='other'
        active={activeTab === 'other'}
        onClick={this.handleFilterClick} />

      </Menu>
    )
  }
}

export default ClothingFilter;
