import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Breakpoints extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Breakpoints">Take advantage of breakpoints when making your website responsive</Title>
        <div className="example">
          <div className="explanation">
            <h5>Responsive breakpoints</h5>
            <p>Default breakpoints are used throughout Blossom to simplify the design of responsive layouts</p>
          </div>
          <div className="module collapsed">
            <table className="table cells">
              <thead>
                <tr>
                  <th>Breakpoint</th>
                  <th>Screen width</th>
                  <th>Class placeholder</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>X-Small</b></td>
                  <td>&gt; 0px</td>
                  <td>.&#123;xs&#125;</td>
                </tr>
                <tr>
                  <td><b>Small</b></td>
                  <td>&gt; 480px</td>
                  <td>.&#123;s&#125;</td>
                </tr>
                <tr>
                  <td><b>Medium</b></td>
                  <td>&gt; 768px</td>
                  <td>.&#123;m&#125;</td>
                </tr>
                <tr>
                  <td><b>Large</b></td>
                  <td>&gt; 1024px</td>
                  <td>.&#123;l&#125;</td>
                </tr>
                <tr>
                  <td><b>X-Large</b></td>
                  <td>&gt; 1224px</td>
                  <td>.&#123;xl&#125;</td>
                </tr>
                <tr>
                  <td><b>XX-Large</b></td>
                  <td>&gt; 1824px</td>
                  <td>.&#123;xxl&#125;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="example breakpoints">
          <div className="explanation">
            <h5>XS breakpoint classes</h5>
            <p>Specific utility classes that alter elements above the <b>X-Small</b> breakpoint.</p>
          </div>
          <div className="module collapsed">
            <p><code>.breakpoint-xs-hide</code> - Hides the element at XS</p>
            <p><code>.breakpoint-xs-show</code> - Shows the element at XS</p>
            <p><code>.breakpoint-xs-stackable</code> - Stacks all children elements at XS</p>
            <p><code>.breakpoint-xs-stack</code> - Stacks targeted element at XS</p>
          </div>
        </div>
        <div className="example breakpoints">
          <div className="explanation">
            <h5>S breakpoint classes</h5>
            <p>Specific utility classes that alter elements above the <b>Small</b> breakpoint.</p>
          </div>
          <div className="module collapsed">
            <p><code>.breakpoint-s-hide</code> - Hides the element at S</p>
            <p><code>.breakpoint-s-show</code> - Shows the element at S</p>
            <p><code>.breakpoint-s-stackable</code> - Stacks all children elements at S</p>
            <p><code>.breakpoint-s-stack</code> - Stacks targeted element at S</p>
          </div>
        </div>
        <div className="example breakpoints">
          <div className="explanation">
            <h5>M breakpoint classes</h5>
            <p>Specific utility classes that alter elements above the <b>Medium</b> breakpoint.</p>
          </div>
          <div className="module collapsed">
            <p><code>.breakpoint-m-hide</code> - Hides the element at M</p>
            <p><code>.breakpoint-m-show</code> - Shows the element at M</p>
            <p><code>.breakpoint-m-stackable</code> - Stacks all children elements at M</p>
            <p><code>.breakpoint-m-stack</code> - Stacks targeted element at M</p>
          </div>
        </div>
        <div className="example breakpoints">
          <div className="explanation">
            <h5>L breakpoint classes</h5>
            <p>Specific utility classes that alter elements above the <b>Large</b> breakpoint.</p>
          </div>
          <div className="module collapsed">
            <p><code>.breakpoint-l-hide</code> - Hides the element at L</p>
            <p><code>.breakpoint-l-show</code> - Shows the element at L</p>
            <p><code>.breakpoint-l-stackable</code> - Stacks all children elements at L</p>
            <p><code>.breakpoint-l-stack</code> - Stacks targeted element at L</p>
          </div>
        </div>
        <div className="example breakpoints">
          <div className="explanation">
            <h5>XL breakpoint classes</h5>
            <p>Specific utility classes that alter elements above the <b>X-Large</b> breakpoint.</p>
          </div>
          <div className="module collapsed">
            <p><code>.breakpoint-xl-hide</code> - Hides the element at XL</p>
            <p><code>.breakpoint-xl-show</code> - Shows the element at XL</p>
            <p><code>.breakpoint-xl-stackable</code> - Stacks all children elements at XL</p>
            <p><code>.breakpoint-xl-stack</code> - Stacks targeted element at XL</p>
          </div>
        </div>
        <div className="example breakpoints">
          <div className="explanation">
            <h5>XXL breakpoint classes</h5>
            <p>Specific utility classes that alter elements above the <b>XX-Large</b> breakpoint.</p>
          </div>
          <div className="module collapsed">
            <p><code>.breakpoint-xxl-hide</code> - Hides the element at XXL</p>
            <p><code>.breakpoint-xxl-show</code> - Shows the element at XXL</p>
            <p><code>.breakpoint-xxl-stackable</code> - Stacks all children elements at XXL</p>
            <p><code>.breakpoint-xxl-stack</code> - Stacks targeted element at XXL</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Breakpoints
