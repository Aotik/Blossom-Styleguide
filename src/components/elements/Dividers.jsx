import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Dividers extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Dividers">Dividers are used to split information into readable sections</Title>
        <div className="example dividers">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Default divider</h5>
            <p>Basic one line divider</p>
          </div>
          <div className="module collapsed">
            <img src="/images/wireframe.png"/>
            <div className="divider"></div>
            <img src="/images/wireframe.png"/>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example dividers">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Divider with text</h5>
            <p>Horizontal dividers can contain text</p>
          </div>
          <div className="module collapsed">
            <img src="/images/wireframe.png"/>
            <div className="divider horizontal">
              Specification
            </div>
            <img src="/images/wireframe.png"/>
            <div className="divider horizontal">
              <code>Dividers fully adapt to the length of text between them</code>
            </div>
            <img src="/images/wireframe.png"/>
            <div className="footer">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dividers
