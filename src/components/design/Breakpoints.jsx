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
                  <td><strong>X-Small</strong></td>
                  <td>&gt; 0px</td>
                  <td><strong>.*-&#123;<span className="text pink">xs</span>&#125;-*</strong></td>
                </tr>
                <tr>
                  <td><strong>Small</strong></td>
                  <td>&gt; 480px</td>
                  <td><strong>.*-&#123;<span className="text pink">s</span>&#125;-*</strong></td>
                </tr>
                <tr>
                  <td><strong>Medium</strong></td>
                  <td>&gt; 768px</td>
                  <td><strong>.*-&#123;<span className="text pink">m</span>&#125;-*</strong></td>
                </tr>
                <tr>
                  <td><strong>Large</strong></td>
                  <td>&gt; 1024px</td>
                  <td><strong>.*-&#123;<span className="text pink">l</span>&#125;-*</strong></td>
                </tr>
                <tr>
                  <td><strong>X-Large</strong></td>
                  <td>&gt; 1224px</td>
                  <td><strong>.*-&#123;<span className="text pink">xl</span>&#125;-*</strong></td>
                </tr>
                <tr>
                  <td><strong>XX-Large</strong></td>
                  <td>&gt; 1824px</td>
                  <td><strong>.*-&#123;<span className="text pink">xxl</span>&#125;-*</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="example breakpoints">
          <div className="explanation">
            <h5>XS breakpoint classes</h5>
            <p>Specific utility classes that alter elements above the <strong>X-Small</strong> breakpoint.</p>
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
            <p>Specific utility classes that alter elements above the <strong>Small</strong> breakpoint.</p>
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
            <p>Specific utility classes that alter elements above the <strong>Medium</strong> breakpoint.</p>
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
            <p>Specific utility classes that alter elements above the <strong>Large</strong> breakpoint.</p>
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
            <p>Specific utility classes that alter elements above the <strong>X-Large</strong> breakpoint.</p>
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
            <p>Specific utility classes that alter elements above the <strong>XX-Large</strong> breakpoint.</p>
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
