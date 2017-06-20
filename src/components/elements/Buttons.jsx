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
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h6>Default & Primary buttons</h6>
            <p>Standard buttons</p>
          </div>
          <div className="module collapsed">
            <div className="button">
              Default Button
            </div>
            <div className="button primary">
              Primary Button
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h6>Outlined buttons</h6>
            <p>Transparent buttons with an outline</p>
          </div>
          <div className="module collapsed">
            <div className="button outlined">
              Outlined default
            </div>
            <div className="button red outlined">
              Outlined red
            </div>
            <div className="button orange outlined">
              Outlined orange
            </div>
            <div className="button yellow outlined">
              Outlined yellow
            </div>
            <div className="button teal outlined">
              Outlined teal
            </div>
            <div className="button blue outlined">
              Outlined blue
            </div>
            <div className="button violet outlined">
              Outlined violet
            </div>
            <div className="button purple outlined">
              Outlined purple
            </div>
            <div className="button pink outlined">
              Outlined pink
            </div>
            <div className="button brown outlined">
              Outlined brown
            </div>
            <div className="button grey outlined">
              Outlined grey
            </div>
            <div className="button black outlined">
              Outlined black
            </div>
            <div className="footer">

            </div>
          </div>
        </div>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h6>Colored buttons</h6>
            <p>Spice up your page with colored buttons</p>
          </div>
          <div className="module collapsed">
            <div className="button red">
              Red
            </div>
            <div className="button orange">
              Orange
            </div>
            <div className="button yellow">
              Yellow
            </div>
            <div className="button green">
              Green
            </div>
            <div className="button teal">
              Teal
            </div>
            <div className="button blue">
              Blue
            </div>
            <div className="button violet">
              Violet
            </div>
            <div className="button purple">
              Purple
            </div>
            <div className="button pink">
              Pink
            </div>
            <div className="button brown">
              Brown
            </div>
            <div className="button grey">
              Grey
            </div>
            <div className="button black">
              Black
            </div>
            <div className="footer">

            </div>
          </div>
        </div>
        <div className="example buttons">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h6>Labeled buttons</h6>
            <p>Labels give visual aid on what the button does</p>
          </div>
          <div className="module collapsed">
            <div className="button blue labeled">
              <i className="fa fa-check"></i>
              Labeled Button
            </div>
            <div className="button green labeled">
              <i className="fa fa-shopping-cart"></i>
              Checkout
            </div>
            <div className="button red labeled labeled-right">
              Delete
              <i className="fa fa-times"></i>
            </div>
            <div className="footer">

            </div>
          </div>
        </div>
        <div className="example sizes">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h6>Button sizes</h6>
            <p>Add <code>.small</code><code>.medium</code><code>.large</code><code>.big</code><code>.massive</code> classes to your button to change its size</p>
          </div>
          <div className="module collapsed">
            <div className="button small">
              Small
            </div>
            <div className="button medium">
              Medium
            </div>
            <div className="button large">
              Large
            </div>
            <div className="button big">
              Big
            </div>
            <div className="button massive">
              Massive
            </div>
            <div className="footer">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Buttons
