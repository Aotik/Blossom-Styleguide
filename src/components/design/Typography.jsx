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
            <p>Headers amplify headings and subheadings by using header tags <code>&lt;h1&gt;</code> <code>&lt;h2&gt;</code> <code>&lt;h3&gt;</code> <code>&lt;h4&gt;</code> <code>&lt;h5&gt;</code> <code>&lt;h6&gt;</code></p>
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
            <p>Blossom&#39;s typeface is dependant on the clients Operating System. 'San Fransisco' is used for macOS/iOS and 'Segoe UI' is used for Windows, with fallback fonts for excluded devices.</p>
          </div>
          <div className="module">
            <p className="transform uppercase">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
            <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
            <p>0 1 2 3 4 5 6 7 8 9</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Typography
