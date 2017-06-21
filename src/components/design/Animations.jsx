import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Animations extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Animations & Effects">A collection of animations and effects that can be used on any element</Title>
        <div className="example animations">
          <div className="explanation">
            <h5>Landing animations</h5>
            <p>Landing animations play once when a user first hits a page <a id="replay_landing" className="float-right">Replay landing animations</a></p>
          </div>
          <div className="group landing">
            <div className="animation">
              <div className="square landing-fadein" data-landing="fadein"></div>
              <code>.landing-fadein</code>
            </div>
            <div className="animation">
              <div className="square landing-ascend" data-landing="ascend"></div>
              <code>.landing-ascend</code>
            </div>
            <div className="animation">
              <div className="square landing-descend" data-landing="descend"></div>
              <code>.landing-descend</code>
            </div>
          </div>
        </div>
        <div className="example animations">
          <div className="explanation">
            <h5>Animation types</h5>
            <p>Add an infinite loop of animations to any element of your choice</p>
          </div>
          <div className="group">
            <div className="animation">
              <div className="square animation-spin"></div>
              <code>.animation-spin</code>
            </div>
            <div className="animation">
              <div className="square animation-rotate"></div>
              <code>.animation-rotate</code>
            </div>
            <div className="animation">
              <div className="square animation-bounce"></div>
              <code>.animation-bounce</code>
            </div>
          </div>
        </div>
        <div className="example animations">
          <div className="explanation">
            <h5>Transition durations</h5>
            <p>Use different transition durations depending on how fast you want the animation to take</p>
          </div>
          <div className="group">
            <div className="animation">
              <div className="circle transitionDuration-0 transitionType-linear"></div>
              <code>.transitionDuration-0</code>
            </div>
            <div className="animation">
              <div className="circle transitionDuration-s transitionType-linear"></div>
              <code>.transitionDuration-s</code>
            </div>
            <div className="animation">
              <div className="circle transitionDuration-m transitionType-linear"></div>
              <code>.transitionDuration-m</code>
            </div>
            <div className="animation">
              <div className="circle transitionDuration-l transitionType-linear"></div>
              <code>.transitionDuration-l</code>
            </div>
            <div className="animation">
              <div className="circle transitionDuration-xl transitionType-linear"></div>
              <code>.transitionDuration-xl</code>
            </div>
            <div className="animation">
              <div className="circle transitionDuration-xxl transitionType-linear"></div>
              <code>.transitionDuration-xxl</code>
            </div>
          </div>
        </div>
        <div className="example animations">
          <div className="explanation">
            <h5>Transition types</h5>
            <p>Use different transition types depending on how you want to animation to appear</p>
          </div>
          <div className="group">
            <div className="animation">
              <div className="circle ash transitionDuration-xl transitionType-linear"></div>
              <code>.transitionType-linear</code>
            </div>
            <div className="animation">
              <div className="circle ash transitionDuration-xl transitionType-ease"></div>
              <code>.transitionType-ease</code>
            </div>
            <div className="animation">
              <div className="circle ash transitionDuration-xl transitionType-scaleIn"></div>
              <code>.transitionType-scaleIn</code>
            </div>
            <div className="animation">
              <div className="circle ash transitionDuration-xl transitionType-scaleOut"></div>
              <code>.transitionType-scaleOut</code>
            </div>
            <div className="animation">
              <div className="circle ash transitionDuration-xl transitionType-spring"></div>
              <code>.transitionType-spring</code>
            </div>
            <div className="animation">
              <div className="circle ash transitionDuration-xl transitionType-bounce"></div>
              <code>.transitionType-bounce</code>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Animations
