import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Alignment extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Element alignment">Align selected elements vertically and/or horizontally by adding simple classes</Title>
        <div className="example layout">
          <div className="explanation">
            <h6>Align both horizontally & vertically</h6>
            <p>You can simply align elements dead center of a relative container by adding the <code>.centered</code> class</p>
            <div className="module">
              <div className="relative">
                <span className="block-grey centered"></span>
              </div>
              <div className="footer">
                <pre>
                  <code className="html">
                  {'<span className="block-grey centered"></span>'}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="example layout">
          <div className="explanation">
            <h6>Align horizontally</h6>
            <p>To align elements only horizontally within a relative container, add the <code>.horizontal</code> class to <code>.centered</code></p>
            <div className="module">
              <div className="relative">
                <span className="block-grey centered horizontal"></span>
              </div>
              <div className="footer">
                <pre>
                  <code className="html">
                  {'<span className="block-grey centered horizontal"></span>'}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="example layout">
          <div className="explanation">
            <h6>Align vertically</h6>
            <p>To align elements only vertically within a relative container, add the <code>.vertical</code> class to <code>.centered</code></p>
            <div className="module">
              <div className="relative">
                <span className="block-grey centered vertical"></span>
              </div>
              <div className="footer">
                <pre>
                  <code className="html">
                  {'<span className="block-grey centered vertical"></span>'}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Alignment
