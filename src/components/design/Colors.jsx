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
        <Title title="Color scheme">Brighten up your interface with a range of vivid colors</Title>
        <div className="example">
          <div className="explanation">
            <h5>Text colors</h5>
            <p>Give text some flair with text color classes</p>
          </div>
          <div className="row nogutter text">
            <div className="col xs-12">
              <h5 className="text primary">Woven silk pyjamas exchanged for blue quartz.</h5>
              <strong>.text.primary</strong>
            </div>
            <div className="col xs-12">
              <h5 className="text red">Quest judge wizard bonks foxy chimp love.</h5>
              <strong>.text.red</strong>
            </div>
            <div className="col xs-12">
              <h5 className="text orange">Fix problem quickly with galvanized jets.</h5>
              <strong>.text.orange</strong>
            </div>
            <div className="col xs-12">
              <h5 className="text yellow">Heavy boxes perform quick waltzes and jigs.</h5>
              <strong>.text.yellow</strong>
            </div>
            <div className="col xs-12">
              <h5 className="text green">My girl wove six dozen plaid jackets before she quit.</h5>
              <strong>.text.green</strong>
            </div>
            <div className="col xs-12">
              <h5 className="text teal">Have a pick: twenty-six letters — no forcing a jumbled quiz!</h5>
              <strong>.text.teal</strong>
            </div>
            <div className="col xs-12">
              <h5 className="text blue">Vamp fox held quartz duck just by wing.</h5>
              <strong>.text.blue</strong>
            </div>
            <div className="col xs-12">
              <h5 className="text violet">My ex pub quiz crowd gave joyful thanks.</h5>
              <strong>.text.violet</strong>
            </div>
            <div className="col xs-12">
              <h5 className="text purple">The jay, pig, fox, zebra and my wolves quack!</h5>
              <strong>.text.purple</strong>
            </div>
            <div className="col xs-12">
              <h5 className="text pink">Painful zombies quickly watch a jinxed graveyard.</h5>
              <strong>.text.pink</strong>
            </div>
            <div className="col xs-12">
              <h5 className="text brown">Cozy sphinx waves quart jug of bad milk.</h5>
              <strong>.text.brown</strong>
            </div>
            <div className="col xs-12">
              <h5 className="text grey">Amazingly few discotheques provide jukeboxes.</h5>
              <strong>.text.grey</strong>
            </div>
            <div className="col xs-12">
              <h5 className="text black">Pack my box with five dozen liquor jugs.</h5>
              <strong>.text.black</strong>
            </div>
          </div>
        </div>
        <div className="opening-message">
          <div className="message info">
            <p>For light, default and dark background colors, use the color name as a class, eg. <code>.red</code> and use <code>.light</code> or <code>.dark</code> to change variation</p>
          </div>
        </div>
        <div className="example">
          <div className="explanation">
            <h5>Background colors</h5>
            <p>Accent an element with a colored background color</p>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme primary light">
              <p>Light primary</p>
              <span>.primary.light</span>
            </div>
            <div className="equal scheme primary">
              <p>Primary</p>
              <span>.primary</span>
            </div>
            <div className="equal scheme primary dark">
              <p>Dark primary</p>
              <span>.primary.dark</span>
            </div>
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
            <h5>Neutral background colors</h5>
            <p>Darken up the page with shades of grey</p>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme black light">
              <p>Light black</p>
              <span>.black.light</span>
            </div>
            <div className="equal scheme black">
              <p>Black</p>
              <span>.black</span>
            </div>
            <div className="equal scheme black dark">
              <p>(It doesn't get darker)</p>
              <span>.black.dark</span>
            </div>
          </div>
          <div className="row nogutter schemes">
            <div className="equal scheme grey light">
              <p>Light grey</p>
              <span>.grey.light</span>
            </div>
            <div className="equal scheme grey">
              <p>Grey</p>
              <span>.grey</span>
            </div>
            <div className="equal scheme grey dark">
              <p>Dark grey</p>
              <span>.grey.dark</span>
            </div>
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
