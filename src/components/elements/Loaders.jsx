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
        <Title title="Loaders">Loaders are used to indicate a state of progress</Title>
        <div className="example loaders">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Basic loader</h5>
            <p>A basic loader on a non-dimmed background</p>
          </div>
            <div className="module collapsed">
            <div className="module">
              <img src="/images/wireframe.png" alt="" />
              <div className="hold"><div className="loader small dark"></div></div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example loaders">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Small loader</h5>
            <p>A dimmed module containing a centered <code>.loader.small</code></p>
          </div>
          <div className="module collapsed">
            <div className="module">
              <div className="dimmed"><div className="hold"><div className="loader small"></div></div></div>
              <img src="/images/wireframe.png" alt="" />
              <img src="/images/wireframe.png" alt="" />
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example loaders">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Standard loader</h5>
              <p>A dimmed module containing a centered default <code>.loader</code></p>
          </div>
          <div className="module collapsed">
            <div className="module">
              <div className="dimmed"><div className="hold"><div className="loader"></div></div></div>
              <img src="/images/wireframe.png" alt="" />
              <img src="/images/wireframe.png" alt="" />
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example loaders">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Large loader</h5>
            <p>A dimmed module containing a centered <code>.loader.large</code></p>
          </div>
          <div className="module collapsed">
            <div className="module">
              <div className="dimmed"><div className="hold"><div className="loader large"></div></div></div>
              <img src="/images/wireframe.png" alt="" />
              <img src="/images/wireframe.png" alt="" />
              <img src="/images/wireframe.png" alt="" />
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example loaders">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Small dark loader</h5>
            <p>A lightly dimmed module containing a centered <code>.loader.small.dark</code></p>
          </div>
          <div className="module collapsed">
            <div className="module">
              <div className="dimmed inverted"><div className="hold"><div className="loader small dark"></div></div></div>
              <img src="/images/wireframe.png" alt="" />
              <img src="/images/wireframe.png" alt="" />
              <img src="/images/wireframe.png" alt="" />
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example loaders">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Standard dark loader</h5>
            <p>A lightly dimmed module containing a centered <code>.loader.dark</code></p>
          </div>
          <div className="module collapsed">
            <div className="module">
              <div className="dimmed inverted"><div className="hold"><div className="loader dark"></div></div></div>
              <img src="/images/wireframe.png" alt="" />
              <img src="/images/wireframe.png" alt="" />
              <img src="/images/wireframe.png" alt="" />
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example loaders">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Large dark loader</h5>
            <p>A lightly dimmed module containing a centered <code>.loader.large.dark</code></p>
          </div>
          <div className="module collapsed">
            <div className="module">
              <div className="dimmed inverted"><div className="hold"><div className="loader large dark"></div></div></div>
              <img src="/images/wireframe.png" alt="" />
              <img src="/images/wireframe.png" alt="" />
              <img src="/images/wireframe.png" alt="" />
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Loaders
