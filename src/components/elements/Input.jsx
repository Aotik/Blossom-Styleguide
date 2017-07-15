import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Input extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Form elements">Fields and action elements for forms</Title>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Standard text input</h5>
            <p>A standard text input & textarea with a border</p>
          </div>
          <div className="module collapsed">
            <div className="input">
              <input type="text" name="name" placeholder="Search..."/>
            </div>
            <div className="input">
              <textarea placeholder="Start typing your story..."/>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Checkbox input</h5>
            <p>Add toggle checkboxes to capture user selections</p>
          </div>
          <div className="module collapsed">
            <div className="input">
              <div className="checkbox">
                <span className="toggle"/>
                <label>Get push notifications for new releases</label>
              </div>
            </div>
            <div className="input">
              <div className="checkbox selected">
                <span className="toggle"/>
                <label>Recieve promotional offers from Blossom <strong>(we would never do that)</strong></label>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
          <div className="message warning">
            <strong>You will need <Link to="/utility/js">Blossom JS</Link> for checkboxes to behave as above.</strong> Clicking on <code>.checkbox .toggle</code> will toggle the <code>.selected</code> class on the Checkbox.
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Radio input</h5>
            <p>Add toggle checkboxes to capture user selections</p>
          </div>
          <div className="module collapsed">
            <form>
              <div className="input">
                <div className="radio">
                  <span className="toggle"/>
                  <label>Get push notifications for new releases</label>
                </div>
              </div>
              <div className="input">
                <div className="radio selected">
                  <span className="toggle"/>
                  <label>Recieve promotional offers from Blossom <strong>(we would never do that)</strong></label>
                </div>
              </div>
              <div className="footer">
              </div>
            </form>
          </div>
          <div className="message warning">
            <strong>You will need <Link to="/utility/js">Blossom JS</Link> for radios to behave as above.</strong> Keep radio elements inside a <code>form</code> tag so that Blossom JS can detect and apply the selection to a single radio element.
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Range input</h5>
            <p>Capture a range input within a form</p>
          </div>
          <div className="module collapsed">
            <div className="input range">
              <input type="range"/>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Transparent text input</h5>
            <p>An input with no background or border</p>
          </div>
          <div className="module collapsed">
            <div className="input transparent">
              <input type="text" name="name" placeholder="Search..."/>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Disabled text input <span className="text teal">(class)</span></h5>
            <p>A disabled input using the <code>.disabled</code> class</p>
          </div>
          <div className="module collapsed">
            <div className="input">
              <input className="disabled" type="text" name="name" placeholder="Search..."/>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Disabled text input <span className="text teal">(property)</span></h5>
            <p>A disabled input using the <code>disabled</code> property</p>
          </div>
          <div className="module collapsed">
            <div className="input">
              <input disabled="true" type="text" name="name" placeholder="Search..."/>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Input with a button</h5>
            <p>A standard input with an ajoined default button</p>
          </div>
          <div className="module collapsed">
            <div className="input action">
              <input type="text" name="name" placeholder="Search..."/>
              <a className="button">Search</a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Input with an outlined button</h5>
            <p>A standard input with an ajoined default outlined button</p>
          </div>
          <div className="module collapsed">
            <div className="input action">
              <input type="text" name="name" placeholder="Search..."/>
              <a className="button outlined">Search</a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Text input with an icon button</h5>
            <p>A standard input with an ajoined icon button</p>
          </div>
          <div className="module collapsed">
            <div className="input action">
              <input type="text" name="name" placeholder="Search..."/>
              <a className="icon button"><i className="ion-search"></i></a>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Text input with an left aligned button</h5>
            <p>A standard input with an ajoined left aligned button</p>
          </div>
          <div className="module collapsed">
            <div className="input action">
              <a className="button">Search</a>
              <input type="text" name="name" placeholder="Search..."/>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example inputs">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Text input with a labeled button</h5>
            <p>A standard input with an ajoined colored labeled button</p>
          </div>
          <div className="module collapsed">
            <div className="input action">
              <input type="text" name="name" placeholder="Enter your 12-digit ID..."/>
              <a className="button grey labeled labeled-right">
                Get help
                <i className="ion-help-buoy"></i>
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

export default Input
