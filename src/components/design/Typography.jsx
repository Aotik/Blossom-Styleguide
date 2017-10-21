import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Typography extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Typography">Experience the face of Blossom</Title>
        <div className="example typeface">
          <div className="explanation">
            <h5>Headers</h5>
            <p>Headers amplify headings and subheadings by using header tags</p>
          </div>
          <div className="module">
            <div className="antiScroll">
              <div className="section nowrap">
                <h1>The quick brown fox jumps over the lazy dog</h1>
                <small>h1 - 3.8em</small>
              </div>
            </div>
            <div className="antiScroll">
              <div className="section nowrap">
                <h2>The quick brown fox jumps over the lazy dog</h2>
                <small>h2 - 2.4em</small>
              </div>
            </div>
            <div className="antiScroll">
              <div className="section nowrap">
                <h3>The quick brown fox jumps over the lazy dog</h3>
                <small>h3 - 2em</small>
              </div>
            </div>
            <div className="antiScroll">
              <div className="section nowrap">
                <h4>The quick brown fox jumps over the lazy dog</h4>
                <small>h4 - 1.6em</small>
              </div>
            </div>
            <div className="antiScroll">
              <div className="section nowrap">
                <h5>The quick brown fox jumps over the lazy dog</h5>
                <small>h5 - 1.4em</small>
              </div>
            </div>
            <div className="antiScroll">
              <div className="section nowrap">
                <h6>The quick brown fox jumps over the lazy dog</h6>
                <small>h6 - 1.2em</small>
              </div>
            </div>
          </div>
        </div>
        <div className="example typeface">
          <div className="explanation">
            <h5>Typeface</h5>
            <p>The new typeface for Blossom is Inter UI. With similar characteristics of the macOS native 'San Fransisco', a serious but friendly vibe is given off. Extremely easy to read and beautifully scalable at all sizes.</p>
            <p><a rel="noopener noreferrer" target="_blank" href="https://github.com/rsms/inter">Read more about the open-source Inter UI font</a></p>
          </div>
          <div className="module">
            <p className="transform uppercase">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
            <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
            <p>0 1 2 3 4 5 6 7 8 9</p>
          </div>
          <small>Please respect the conditions of the original license when using Inter UI with Blossom.</small>
        </div>
      </div>
    )
  }
}

export default Typography
