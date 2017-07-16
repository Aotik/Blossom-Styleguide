import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Loaders extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Tooltips">Add CSS-only helpers to hoverable elements using tooltips</Title>
        <div className="example tooltips">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Basic light tooltips</h5>
            <p>Light tooltips with defined content and position</p>
          </div>
            <div className="module collapsed">
              <div className="button tooltip" data-content="Hello explorer! &#x1f590;" data-position="top left">Top Left</div>
              <div className="button tooltip" data-content="Hello explorer! &#x1f590;" data-position="top center">Top Center</div>
              <div className="button tooltip" data-content="Hello explorer! &#x1f590;" data-position="top right">Top Right</div>
              <div className="button tooltip" data-content="Hello explorer! &#x1f590;" data-position="bottom left">Bottom Left</div>
              <div className="button tooltip" data-content="Hello explorer! &#x1f590;" data-position="bottom center">Bottom Center</div>
              <div className="button tooltip" data-content="Hello explorer! &#x1f590;" data-position="bottom right">Bottom Right</div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example tooltips">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Basic dark tooltips</h5>
            <p>Dark tooltips with defined content and position</p>
          </div>
            <div className="module collapsed">
              <div className="button tooltip dark" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="top left">Top Left</div>
              <div className="button tooltip dark" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="top center">Top Center</div>
              <div className="button tooltip dark" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="top right">Top Right</div>
              <div className="button tooltip dark" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="bottom left">Bottom Left</div>
              <div className="button tooltip dark" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="bottom center">Bottom Center</div>
              <div className="button tooltip dark" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="bottom right">Bottom Right</div>
            <div className="footer">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Loaders
