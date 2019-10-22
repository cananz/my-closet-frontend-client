import React from 'react';
// import { Menu } from 'semantic-ui-react'

class SideNav extends React.Component {

  constructor() {
    super()
    this.state = { activeItem: '' }

  }

  // handleFilterClick = (e, { name }) => {
  //   e.preventDefault()
  //   this.setState({activeItem: name})
  //   console.log(name)
  //   debugger
  //   // this.props.filterItems(name)
  // }

  render() {

    // const {activeItem} = this.state

    return (
      <nav>
        {/* <Menu>
          <Menu.Item
          name='all'
          active={activeItem === 'all'}
          onClick={this.handleFilterClick} />

          <Menu.Item
          name='tops'
          active={activeItem === 'tops'}
          onClick={this.handleFilterClick} />

          <Menu.Item
          name='bottoms'
          active={activeItem === 'bottoms'}
          onClick={this.handleFilterClick} />
        </Menu> */}
      </nav>
    )
  }
}

export default SideNav;
