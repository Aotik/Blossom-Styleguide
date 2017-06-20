import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Menus extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Menus">Menu components be used for grouped navigation</Title>
        <div className="opening-message">
          <div className="message info">
            <p>Note that to activate menu <code>.item</code>&#39;s on click, you need to include <Link to="/utility">Blossom JS</Link> in your markup</p>
          </div>
        </div>

        <div className="example menus">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Basic</h5>
            <p>Basic menus have no background. States are distinguished by the items color and font-weight</p>
          </div>
          <div className="module collapsed">
            <div className="basic menu">
              <a className="item active">
                Features
              </a>
              <a className="item">
                Pricing
              </a>
              <a className="item">
                Support
              </a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>

        <div className="example menus">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Pills</h5>
            <p>Pill menus are simple, having a transparent background and a background color on hover or <code>.active</code> state</p>
          </div>
          <div className="module collapsed">
            <div className="pills menu">
              <a className="item active">
                Home
              </a>
              <a className="item">
                About
              </a>
              <a className="item">
                Contact
              </a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example menus">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Vertical pills</h5>
            <p>Pill menus can also be set to vertical by adding the <code>.vertical</code> class</p>
          </div>
          <div className="module collapsed">
            <div className="vertical pills menu">
              <a className="item active">
                Home
              </a>
              <a className="item">
                About
              </a>
              <a className="item">
                Contact
              </a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example menus">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Underlined</h5>
            <p>Underlined menus are a simple text-based menu with a prominent underline on <code>.active</code> items</p>
          </div>
          <div className="module collapsed">
            <div className="underlined menu">
              <a className="item active">
                Home
              </a>
              <a className="item">
                Inbox
                <span className="label blue">4</span>
              </a>
              <a className="item">
                Sent
              </a>
            </div>

            <p className="note">Add the <code>.show</code> class to <code>.menu</code> to show the gray guideline</p>

            <div className="show underlined menu">
              <a className="item active">
                Home
              </a>
              <a className="item">
                Inbox
                <span className="label blue">4</span>
              </a>
              <a className="item">
                Sent
              </a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example menus">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Vertical underlined</h5>
            <p>Underlined menus are a simple text-based menu with a prominent underline on <code>.active</code> items</p>
          </div>
          <div className="module collapsed">
            <div className="vertical underlined menu">
              <a className="item active">
                Home
              </a>
              <a className="item">
                Inbox
                <span className="label blue">4</span>
              </a>
              <a className="item">
                Sent
              </a>
            </div>

            <p className="note">Add the <code>.show</code> class to <code>.menu</code> to show the gray guideline</p>

            <div className="show vertical underlined menu">
              <a className="item active">
                Home
              </a>
              <a className="item">
                Inbox
                <span className="label blue">4</span>
              </a>
              <a className="item">
                Sent
              </a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example menus">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Paneled</h5>
            <p>Paneled menus come in a moduled type container spanning the width of the parent</p>
          </div>
          <div className="module collapsed">
            <div className="panel menu">
              <a className="item">
                Resume
              </a>
              <a className="item">
                Portfolio
              </a>
              <a className="item active">
                Contact
              </a>
            </div>

            <p className="note">Add the <code>.borderless</code> class to <code>.menu</code> to remove the borders from the paneled menu</p>

            <div className="borderless panel menu">
              <a className="item">
                1
              </a>
              <a className="item active">
                2
              </a>
              <a className="item">
                3
              </a>
              <a className="item">
                4
              </a>
              <a className="item">
                5
              </a>
              <a className="item">
                6
              </a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example menus">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Vertical paneled</h5>
            <p>Paneled menus can also be set to vertical by adding the <code>.vertical</code> class</p>
          </div>
          <div className="module collapsed">
            <div className="vertical panel menu">
              <a className="item active">
                Resume
              </a>
              <a className="item">
                Portfolio
              </a>
              <a className="item">
                Contact
              </a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menus
