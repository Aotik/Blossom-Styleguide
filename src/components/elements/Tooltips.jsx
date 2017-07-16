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
            <h5>About tooltips</h5>
            <p>Add the <code>.tooltip</code> class to an element and customize them by adding properties as in the examples below</p>
          </div>
          <div className="module collapsed demo">
            <div className="button primary tooltip" data-content="This is what a tooltip looks like! &#x1f448;" data-position="top left">Tooltips can be applied to any element</div>
            <div className="button tooltip dark" data-text="small" data-content="This is what a small dark tooltip looks like! &#x1f448;" data-position="bottom right">They can also be inverted</div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example tooltips">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Standard light tooltips</h5>
            <p>Light tooltips using <code>[data-content]</code> and <code>[data-position]</code> properties</p>
          </div>
          <div className="module collapsed">
            <div className="button tooltip" data-content="Hello explorer! &#x1f590;" data-position="top left">Top Left</div>
            <div className="button tooltip" data-content="Hello explorer! &#x1f590;" data-position="top center">Top Center</div>
            <div className="button tooltip" data-content="Hello explorer! &#x1f590;" data-position="top right">Top Right</div>
            <div className="breakavoid"></div>
            <div className="button tooltip" data-content="Hello explorer! &#x1f590;" data-position="bottom left">Bottom Left</div>
            <div className="button tooltip" data-content="Hello explorer! &#x1f590;" data-position="bottom center">Bottom Center</div>
            <div className="button tooltip" data-content="Hello explorer! &#x1f590;" data-position="bottom right">Bottom Right</div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example tooltips">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Standard dark tooltips</h5>
            <p>Dark tooltips are created by appending the <code>.dark</code> class to a Tooltip element</p>
          </div>
          <div className="module collapsed">
            <div className="button tooltip dark" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="top left">Top Left</div>
            <div className="button tooltip dark" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="top center">Top Center</div>
            <div className="button tooltip dark" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="top right">Top Right</div>
            <div className="breakavoid"></div>
            <div className="button tooltip dark" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="bottom left">Bottom Left</div>
            <div className="button tooltip dark" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="bottom center">Bottom Center</div>
            <div className="button tooltip dark" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="bottom right">Bottom Right</div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example tooltips">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Tooltip text sizes</h5>
            <p>Change the exclamation of tooltips with changeable text sizes using the <code>[data-text]</code> property</p>
          </div>
          <div className="module collapsed">
            <div className="button tooltip" data-text="tiny" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="top left">Tiny tooltip</div>
            <div className="button tooltip" data-text="small" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="top center">Small tooltip</div>
            <div className="button tooltip" data-text="medium" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="top right">Medium tooltip</div>
            <div className="breakavoid"></div>
            <div className="button tooltip" data-text="large" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="bottom left">Large tooltip</div>
            <div className="button tooltip" data-text="big" data-content="Hello explorer! &#x1f590; &#x1f525;" data-position="bottom center">Big tooltip</div>
            <div className="footer">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Loaders
