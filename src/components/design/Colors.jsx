import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Scheme extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Color scheme">Available color palette used throughout Blossom UI</Title>
        <div className="example">
          <div className="explanation">
            <h5>Accent colors</h5>
            <p>Light, standard and dark colors; use the color name as a class, eg. <code>.red</code> and use <code>.light</code> or <code>.dark</code> to change variation</p>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme red light">
              <p>Light red</p>
              <span>.red.light</span>
            </div>
            <div className="equal scheme red">
              <p>Red</p>
              <span>.red</span>
            </div>
            <div className="equal scheme red dark">
              <p>Dark red</p>
              <span>.red.dark</span>
            </div>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme orange light">
              <p>Light orange</p>
              <span>.orange.light</span>
            </div>
            <div className="equal scheme orange">
              <p>Orange</p>
              <span>.orange</span>
            </div>
            <div className="equal scheme orange dark">
              <p>Dark orange</p>
              <span>.orange.dark</span>
            </div>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme yellow light">
              <p>Light yellow</p>
              <span>.yellow.light</span>
            </div>
            <div className="equal scheme yellow">
              <p>Yellow</p>
              <span>.yellow</span>
            </div>
            <div className="equal scheme yellow dark">
              <p>Dark yellow</p>
              <span>.yellow.dark</span>
            </div>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme green light">
              <p>Light green</p>
              <span>.green.light</span>
            </div>
            <div className="equal scheme green">
              <p>Green</p>
              <span>.green</span>
            </div>
            <div className="equal scheme green dark">
              <p>Dark green</p>
              <span>.green.dark</span>
            </div>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme teal light">
              <p>Light teal</p>
              <span>.teal.light</span>
            </div>
            <div className="equal scheme teal">
              <p>Teal</p>
              <span>.teal</span>
            </div>
            <div className="equal scheme teal dark">
              <p>Dark teal</p>
              <span>.teal.dark</span>
            </div>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme blue light">
              <p>Light blue</p>
              <span>.blue.light</span>
            </div>
            <div className="equal scheme blue">
              <p>Blue</p>
              <span>.blue</span>
            </div>
            <div className="equal scheme blue dark">
              <p>Dark blue</p>
              <span>.blue.dark</span>
            </div>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme violet light">
              <p>Light violet</p>
              <span>.violet.light</span>
            </div>
            <div className="equal scheme violet">
              <p>Violet</p>
              <span>.violet</span>
            </div>
            <div className="equal scheme violet dark">
              <p>Dark violet</p>
              <span>.violet.dark</span>
            </div>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme purple light">
              <p>Light purple</p>
              <span>.purple.light</span>
            </div>
            <div className="equal scheme purple">
              <p>Purple</p>
              <span>.purple</span>
            </div>
            <div className="equal scheme purple dark">
              <p>Dark purple</p>
              <span>.purple.dark</span>
            </div>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme pink light">
              <p>Light pink</p>
              <span>.pink.light</span>
            </div>
            <div className="equal scheme pink">
              <p>Pink</p>
              <span>.pink</span>
            </div>
            <div className="equal scheme pink dark">
              <p>Dark pink</p>
              <span>.pink.dark</span>
            </div>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme brown light">
              <p>Light brown</p>
              <span>.brown.light</span>
            </div>
            <div className="equal scheme brown">
              <p>Brown</p>
              <span>.brown</span>
            </div>
            <div className="equal scheme brown dark">
              <p>Dark brown</p>
              <span>.brown.dark</span>
            </div>
          </div>
        </div>
        <div className="example">
          <div className="explanation">
            <h5>Gray colors</h5>
            <p>Light, standard and dark grays used in Blossom UI</p>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme ash light">
              <p>Light ash</p>
              <span>.ash.light</span>
            </div>
            <div className="equal scheme ash">
              <p>Ash</p>
              <span>.ash</span>
            </div>
            <div className="equal scheme ash dark">
              <p>Dark ash</p>
              <span>.ash.dark</span>
            </div>
          </div>
          <div className="row nogutter schemes dark">
            <div className="equal scheme smoke light">
              <p>Light smoke</p>
              <span>.smoke.light</span>
            </div>
            <div className="equal scheme smoke">
              <p>Smoke</p>
              <span>.smoke</span>
            </div>
            <div className="equal scheme smoke dark">
              <p>Dark smoke</p>
              <span>.smoke.dark</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Scheme
