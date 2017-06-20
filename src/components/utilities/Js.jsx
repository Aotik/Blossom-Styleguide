import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'
import {HighlightCode} from '../common/Helpers'

class Js extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    HighlightCode()
  }

  render() {
    return (
      <div>
        <Title title="Using Blossom JS">Blossom JS is designed to be included in your markup to initialise elements and provide helper functions</Title>
        <div className="opening-message">
          <div className="message info">
            <p>To learn how to get up and running with Blossom JS, visit the <Link to="/introduction">introduction</Link> guide</p>
          </div>
        </div>
        <div className="example js">
          <div className="explanation">
            <h5>Initialize dropdowns</h5>
            <p>You can initialize dropdowns at any time in addition to them being done automatically when Blossom JS is included in your markup.</p>
          </div>
          <pre>
            <code className="javascript">
              $(".dropdown").dropdown()
            </code>
          </pre>
        </div>
        <div className="example js">
          <div className="explanation">
            <h5>Menu handling</h5>
            <p>Menus and items are managed without any need of initialization, simply use the correct markup by ensuring all <code>.item</code> classes inside a <code>.menu</code> element. Dynamically added menus and items are also properly handled.</p>
          </div>
        </div>
        <div className="example js">
          <div className="explanation">
            <h5>Accordion handling</h5>
            <p>Accordions are managed without any need of initialization. All that is required is that the title and content have the <code>.title</code> and <code>.content</code> classes respectively. Dynamically added accordions are also properly handled.</p>
          </div>
        </div>
        <div className="example js">
          <div className="explanation">
            <h5>Loading progress bars</h5>
            <p>Progress bars are already initiated on load of Blossom JS.</p>
          </div>
          <pre>
            <code className="javascript">
              loadProgressBars()
            </code>
          </pre>
        </div>
        <div className="example js">
          <div className="explanation">
            <h5>Loading active progress bars</h5>
            <p>Active progress bars are also initiated on load of Blossom JS.</p>
          </div>
          <pre>
            <code className="javascript">
              loadActiveProgressBars()
            </code>
          </pre>
        </div>
      </div>
    )
  }
}

export default Js
