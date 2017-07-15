import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Buttons extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Buttons">A button indicates a possible user action</Title>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Default & primary buttons</h5>
            <p>Standard basic UI buttons</p>
          </div>
          <div className="module collapsed">
            <a className="button">
              Default Button
            </a>
            <a className="button primary">
              Primary Button
            </a>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Colored buttons</h5>
            <p>Spice up your page with colored buttons</p>
          </div>
          <div className="module collapsed">
            <a className="button red">
              Red
            </a>
            <a className="button orange">
              Orange
            </a>
            <a className="button yellow">
              Yellow
            </a>
            <a className="button green">
              Green
            </a>
            <a className="button teal">
              Teal
            </a>
            <a className="button blue">
              Blue
            </a>
            <a className="button violet">
              Violet
            </a>
            <a className="button purple">
              Purple
            </a>
            <a className="button pink">
              Pink
            </a>
            <a className="button brown">
              Brown
            </a>
            <a className="button grey">
              Grey
            </a>
            <a className="button black">
              Black
            </a>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Outlined buttons</h5>
            <p>Transparent buttons with an outline</p>
          </div>
          <div className="module collapsed">
            <a className="button outlined">
              Outlined default
            </a>
            <a className="button red outlined">
              Outlined red
            </a>
            <a className="button orange outlined">
              Outlined orange
            </a>
            <a className="button yellow outlined">
              Outlined yellow
            </a>
            <a className="button teal outlined">
              Outlined teal
            </a>
            <a className="button blue outlined">
              Outlined blue
            </a>
            <a className="button violet outlined">
              Outlined violet
            </a>
            <a className="button purple outlined">
              Outlined purple
            </a>
            <a className="button pink outlined">
              Outlined pink
            </a>
            <a className="button brown outlined">
              Outlined brown
            </a>
            <a className="button grey outlined">
              Outlined grey
            </a>
            <a className="button black outlined">
              Outlined black
            </a>
            <div className="footer">

            </div>
          </div>
        </div>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Grouped buttons</h5>
            <p>Group buttons together to create a series of actions</p>
          </div>
          <div className="module collapsed">
            <div className="group">
              <a className="button">Create repo</a>
              <a className="button">Star repo</a>
              <a className="button">Fork repo</a>
            </div>
            <div className="group">
              <a className="button primary small">Align left</a>
              <a className="button primary small">Align center</a>
              <a className="button primary small">Align right</a>
              <a className="button primary small">Justify</a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Disabled buttons</h5>
            <p>Disable buttons by using the <code>.disabled</code> class or <code>[disabled="true"]</code> property</p>
          </div>
          <div className="module collapsed">
            <a className="button disabled">
              Disabled
            </a>
            <a className="button primary" disabled="true">
              I'm disabled via an attribute
            </a>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Loading state</h5>
            <p>Add a <Link to="/elements/loaders">loader</Link> to your button to indicate a loading state</p>
          </div>
          <div className="module collapsed">
            <a className="button loading">
              <span>Loading</span>
              <div className="loader dark">
              </div>
            </a>
            <a className="button loading">
              <div className="loader dark">
              </div>
            </a>
            <a className="button primary loading">
              <div className="loader">
              </div>
              <span>Also loading...</span>
            </a>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Labeled buttons</h5>
            <p>Labels give visual aid on what the button does</p>
          </div>
          <div className="module collapsed">
            <a className="button grey labeled">
              <i className="ion-gear-a"></i>
              Open preferences
            </a>
            <a className="button green labeled">
              <i className="ion-bag"></i>
              View cart
            </a>
            <a className="button red labeled labeled-right">
              Delete comment
              <i className="ion-close-round"></i>
            </a>
            <div className="footer">

            </div>
          </div>
        </div>
        <div className="example sizes">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Button sizes</h5>
            <p>Add <code>.small</code><code>.medium</code><code>.large</code><code>.big</code>classes to your button to change its size</p>
          </div>
          <div className="module collapsed">
            <a className="button small">
              Small
            </a>
            <a className="button medium">
              Medium
            </a>
            <a className="button large">
              Large
            </a>
            <a className="button big">
              Big
            </a>
            <div className="footer">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Buttons
