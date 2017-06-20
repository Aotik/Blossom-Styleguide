import React from 'react'
import Link from 'react-router/lib/Link'

import BaseComponent from './common/BaseComponent'

import NavFooter from './NavFooter'

class Changelog extends BaseComponent {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
      <section className="hero clearfix light dent-container">
        <div className="dent-cover">
          <div className="contain">
            <h1>Changelog</h1>
            <h3>All recent changes and new features</h3>
          </div>
        </div>
        <div className="dent bg">
          <img src="/images/dent.svg"/>
        </div>
      </section>
        <section className="guide">
          <div className="contain">
            <div className="log">
              <div className="date">June 20, 2017</div>
              <div className="inner">
                <h4><span className="label green">Improvements</span> UI restructuring</h4>
                <p>Font sizes were all over the place with Blossom, so they've now be bundled nicely together to prevent headaches. The primary font has also been changed to support System Fonts with Roboto as a fallback for excluded devices.</p>
                <p>New visual updates to Message elements, Menu elements, Stage elements and Dropdowns to fit in with the vision Blossom UI is going forward with.</p>
                <h4><span className="label yellow">Deprecated</span> Background preset variables</h4>
                <p>Background variables used with previous Message elements will be deprecated in version <strong>1.5</strong> as they are no longer being used. These include:</p>
                <ul className="list">
                  <li className="item"><code>background-info</code></li>
                  <li className="item"><code>background-warning</code></li>
                  <li className="item"><code>background-important</code></li>
                  <li className="item"><code>background-success</code></li>
                </ul>
              </div>
            </div>
            <div className="log">
              <div className="date">May 20, 2017</div>
              <div className="inner">
                <h4><span className="label primary">New</span> Flex grids are here!</h4>
                <p>New grid system is finally here!</p>
                <p>So the old system was based around the typical old CSS widths that align inline with eachother, boring really. The new flex system used flex, just like it sounds. Overall this not only makes Blossom much lighter, but with less flaws and more features than its older counterpart.</p>
                <p>With the new grid system, equal columns are introduced. These columns don't have a set width but instead share an equal part of a row depending on the amount of columns present. The rest of the syntax stays the same so you shouldn't encounter any problems with your projects in the new update.</p>
                <h4><span className="label violet">Fix</span> Styling and Blossom JS issues fixed</h4>
                <p>Bug in Blossom JS caused an issue with opening accordions. <span className="text-green">Bug squashed</span></p>
                <p>Issues with breakpoint show classes. <span className="text-green">Also squashed</span></p>
                <p>Styling issues with Accordion headers fixed and variable for grid padding added in <b>variables.styl</b></p>
              </div>
            </div>
            <div className="log">
              <div className="date">May 13, 2017</div>
              <div className="inner">
                <h4><span className="label violet">Fix</span> Minor styling fixes</h4>
                <p>Few wrench winds here and there!</p>
                <p>Fixes to text wrapping in <code>pre</code> tags and page padding inconsistencies.</p>
              </div>
            </div>
            <div className="log">
              <div className="date">May 12, 2017</div>
              <div className="inner">
                <h4><span className="label green">Improvement</span> Improvements to some elements</h4>
                <p>Label element has been updated to be more bolder and stand out more on a page and at the same time taking up less space.</p>
                <p>Lists have been improved to actually show correct order counter as well as some color fixes as an improvement to its opacity configuration.</p>
                <p>Stages have slightly been improved to support inner <code>small</code> and <code>pre</code> tags. Fluid mode also added which takes up the width of the container.</p>
                <p>A negative letter spacing has been added to headings, making them more compact.</p>
              </div>
            </div>
            <div className="log">
              <div className="inner more">
                <a ref="noreferrer noopener" target="_blank" href="https://github.com/aotik/Blossom-Styleguide/commits/master">See all changes in the repository</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Changelog
