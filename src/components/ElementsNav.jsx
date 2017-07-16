import React from 'react'
import Link from 'react-router/lib/Link'
import BaseComponent from './common/BaseComponent'

import LinkElement from './LinkElement'

class ElementsNav extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <aside className="sidebar clearfix">
        <div className="fixed top">
          <div className="inner">
            <h6>Resources</h6>
            <ul>
            <LinkElement to="/elements/accordion">Accordion</LinkElement>
              <LinkElement to="/elements/buttons">Buttons</LinkElement>
              <LinkElement to="/elements/cards">Cards</LinkElement>
              <LinkElement to="/elements/comments">Comments</LinkElement>
              <LinkElement to="/elements/dividers">Dividers</LinkElement>
              <LinkElement to="/elements/dropdown">Dropdown</LinkElement>
              <LinkElement to="/elements/forms">Form elements</LinkElement>
              <LinkElement to="/elements/images">Images</LinkElement>
              <LinkElement to="/elements/labels">Labels</LinkElement>
              <LinkElement to="/elements/lists">Lists</LinkElement>
              <LinkElement to="/elements/loaders">Loaders</LinkElement>
              <LinkElement to="/elements/menus">Menus</LinkElement>
              <LinkElement to="/elements/messages">Messages</LinkElement>
              <LinkElement to="/elements/progressbars">Progress bars</LinkElement>
              <LinkElement to="/elements/stages">Stages</LinkElement>
              <LinkElement to="/elements/tables">Tables</LinkElement>
              <LinkElement to="/elements/tooltips">Tooltips</LinkElement>
            </ul>
            <a className="resources breakpoint-m-show"><i className="ion-chevron-down"/></a>
          </div>
        </div>
      </aside>
    )
  }
}

export default ElementsNav
