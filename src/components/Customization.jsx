import React from 'react'
import Link from 'react-router/lib/Link'

import BaseComponent from './common/BaseComponent'
import {HighlightCode} from './common/Helpers'

import NavFooter from './NavFooter'

class Customization extends BaseComponent {
  constructor() {
    super()
  }

  componentDidMount() {
    HighlightCode()
  }

  render() {
    return (
      <div>
        <section className="hero clearfix light dent-container">
          <div className="dent-cover">
            <div className="contain">
              <h1>Customization</h1>
              <h3>Tips & tricks for making Blossom your own</h3>
              <div className="button-group breakpoint-xs-stackable">
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom" className="button medium outlined">Open-source repository</a>
                <Link to="/elements" className="button medium primary">Browse elements</Link>
              </div>
            </div>
          </div>
          <div className="dent bg">
            <img src="/images/dent.svg"/>
          </div>
        </section>
        <section className="guide">
          <div className="contain">
            <h3>About theming</h3>
            <div className="stages vertical fluid">
              <div className="stage">
                <div className="content">
                  <div className="header">Things to note before you start</div>
                    Theming Blossom for your next project is an extremely basic task once you understand the structured layout of the source files.

                    <ul className="list bulleted">
                      <li className="item"><a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom/blob/master/source/modules/_.styl">Using _.styl</a> to enter your additional custom styling</li>
                      <li className="item"><a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom/blob/master/source/modules/variables.styl">Using variables.styl</a> change default values used throughout the source files</li>
                      <li className="item">Importing your own font at the beginning of <a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom/blob/master/source/blossom.styl">blossom.styl</a></li>
                      <li className="item">Make use of already available, custom Stylus frameworks <a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom/blob/master/source/blossom.styl">blossom.styl</a></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="contain">
            <h3>Building Blossom</h3>
            <div className="stages vertical fluid">
              <div className="stage">
                <div className="content">
                  <div className="header">Compiling new changes</div>
                    By now you should have Gulp installed and are wondering, how do I build my new changes? When installing Blossom, <code>gulpfile.js</code> is included within the directory which manages these tasks. There are two tasks that can be ran.
                    <br/>
                    <div className="message warning">Ensure you change any folder variables in the gulpfile if you moved the blossom-ui folder.</div>
                    You can build changes whilst you're working on theming Blossom by running a task to watch for any changes:
                    <pre>
                      <code className="cmake">
                        {'$ gulp watch'}
                      </code>
                    </pre>
                    <br/>
                    Or you can build it once:
                    <pre>
                      <code className="cmake">
                        {'$ gulp build'}
                      </code>
                    </pre>
                </div>
              </div>
            </div>
          </div>
          <div className="contain">
            <h3>Customizing variables.styl</h3>
            <div className="stages vertical fluid">
              <div className="stage">
                <div className="content">
                  <div className="header">Typography</div>
                    At the top of <a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom/blob/master/source/modules/variables.styl">variables.styl</a> you'll find the default settings for general <Link to="/design/typography">Typography</Link>, including font sizes and font families.
                  <pre>
                    <code className="html">
{`...
font-size-h4 = 1.6em
font-size-h5 = 1.4em
font-size-h6 = 1.2em

font-family-standard = "Inter UI", sans-serif;
...`}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="stage">
                <div className="content">
                  <div className="header">Color scheme</div>
                    Colors are defined in <a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom/blob/master/source/modules/variables.styl">variables.styl</a> and accessible throughout Blossoms source files. These define the color theming of elements. In the colors section you will also find background colors and default text colors used as defaults.
                    <pre>
                      <code className="cmake">
{`primary-color = #435ce2
primary-white = #fff
primary-black = #000

color-red = #ff2d2d
color-orange = #ffa717
color-yellow = #ffbd00
color-green = #00c357
color-teal = #00b1a1
...`}
                      </code>
                    </pre>
                </div>
              </div>
              <div className="stage">
                <div className="content">
                  <div className="header">Identifiers & Page sizing</div>
                    Identifiers are mainly the border radius of elements and static heights of input and button elements. The page section contains the max width and the set padding of the container class.
                    <pre>
                      <code className="cmake">
{`//Identifiers
border-radius-normal = 4px
em-height = 2.8em

//Page
standard-page-width = 1224px
standard-page-padding = 1em`}
                      </code>
                    </pre>
                </div>
              </div>
              <div className="stage">
                <div className="content">
                  <div className="header">Button and image sizes</div>
                    In this section you can alter the scale of different button and image size classes.
                    <pre>
                      <code className="cmake">
{`//Button size
button-small = 0.8em
button-medium = 1.2em
...

//Image size
image-mini = 35px
image-tiny = 70px
image-small = 140px
...`}
                      </code>
                    </pre>
                </div>
              </div>
              <div className="stage">
                <div className="content">
                  <div className="header">Animation durations</div>
                    The time of each individual <Link to="/design/animations">animation</Link> duration class can be altered here to tweak the timing of an animation down to the millisecond.
                    <pre>
                      <code className="cmake">
{`//Animations
duration-0 = 0s
duration-s = .08s
duration-m = .18s
...`}
                      </code>
                    </pre>
                </div>
              </div>
              <div className="stage">
                <div className="content">
                  <div className="header">Grid attributes</div>
                    The complex <Link to="/design/grid">grid system</Link> has a few settings to it. grid-length defines how many columns there shall be in a given .row and grid-padding the padding of an individual column.
                    <pre>
                      <code className="cmake">
{`//Grids
grid-padding = 1em
grid-length = 12`}
                      </code>
                    </pre>
                </div>
              </div>
              <div className="stage">
                <div className="content">
                  <div className="header">Responsive design</div>
                    The basis behind breakpoints and the grid system rely on the Rupture framework. This section of <a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom/blob/master/source/modules/variables.styl">variables.styl</a> can be changed to alter each breakpoint down to the nearest pixel. Default variables were chosen based on sizes of modern devices.
                    <pre>
                      <code className="cmake">
{`//Rupture
rupture.base-font-size = 15px
rupture.anti-overlap = true

rupture.scale = 0 480px 768px 1024px 1224px 1824px
rupture.scale-names = 'xs' 's' 'm' 'l' 'xl' 'hd'`}
                      </code>
                    </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Customization
