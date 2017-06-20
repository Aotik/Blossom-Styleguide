import React from 'react'
import $ from 'jquery'
import Link from 'react-router/lib/Link'

import BaseComponent from './common/BaseComponent'
import NavFooter from './NavFooter'

class Landing extends BaseComponent {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <section className="hero clearfix dent-container light">
          <div className="dent-cover">
            <div className="contain">
              <span className="label green">v1.4.2</span>
              <h1><img src="/images/logo.svg"/></h1>
              <h3>A simply beautiful, themeable design framework built from the ground up in Stylus with performance in mind.</h3>
              <div className="button-group breakpoint-xs-stackable">
                <Link to="/introduction" className="button large outlined">Getting started</Link>
                <a rel="noopener noreferrer" target="_blank" className="button large primary labeled labeled-right" href="https://cdn.darken.io/blossom/1.4.2/blossom-1.4.2.zip"><i className="fa fa-angle-double-down"/> Download Blossom UI</a>
              </div>
            </div>
          </div>
          <div className="dent">
            <img src="/images/dent.svg"/>
          </div>
        </section>
        <section className="size dent-container">
          <div className="dent-cover">
            <div className="contain">
              <h2>Few things about Blossom UI</h2>
              <ul className="bulleted list">
                <li className="item">Just under 80kb compressed; if a framework was a feather, this would be it</li>
                <li className="item">Over 70+ elements, utilities, design features and counting</li>
                <li className="item">Fully themable, built on Stylus and powered by popular Stylus packages</li>
                <li className="item">Has it's own Javascript framework to move stuff around...</li>
                <li className="item">Extensive 12 (can be changed!) column grid system</li>
                <li className="item">Beautiful and friendly color scheme</li>
                <li className="item">Semantic, natural language CSS classes</li>
                <Link to="/elements" className="button large outlined white block">Explore the components</Link>
              </ul>
            </div>
            <div className="slide">
              <pre>
              <code>
{`$ npm install gulp
$ npm install blossom-ui --save`}
              </code>
              <span className="muted">Let it do its thing for a few seconds...</span>
              <span className="muted">Aaaand that's it.</span>
              <span className="muted relative bottom">Or if you prefer, simply download the <a rel="noopener noreferrer"  target="_blank" href="https://cdn.darken.io/blossom/1.4.2/blossom-1.4.2.zip">ZIP file</a> <i className="fa fa-angle-double-down"/></span>
              </pre>
            </div>
          </div>
          <div className="dent">
            <img src="/images/dent-primary.svg"/>
          </div>
        </section>
        <section className="features dent-container light">
          <div className="dent-cover">
            <div className="contain">
            <h2>People already <i className="fa fa-heart text-red"/> Blossom UI</h2>
            <p>Over 4500+ awesome people have installed blossom-ui just from NPM, using it as their standard design framework. Why keep wasting precious project time when you can just take a minute to set up Blossom now?</p>
            <div className="row">
              <div className="xs-12 l-6 col column">
                <div className="inner">
                  <i className="text-yellow fa fa-edit"/>
                  <h4>Perfect for customisability</h4>
                  <p>Being built on Stylus, the task of customizing Blossom&#39;s look and feel to fit the vision of your next project is incredibly easy to take on.</p>
                  <Link to="/customization" className="button outlined medium">About theming</Link>
                  </div>
              </div>
              <div className="xs-12 l-6 col column">
                <div className="inner">
                  <i className="text-black fa fa-github"/>
                  <h4>It&#39;s free and open source!</h4>
                  <p>With Blossom being open source, anyone is welcome to input their expertise into improving the Blossom framework as a whole.</p>
                  <a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/Blossom" className="button medium outlined">Open-source repository</a>
                  </div>
              </div>
            </div>
            </div>
          </div>
          <div className="dent bg">
            <img src="/images/dent.svg"/>
          </div>
        </section>
        <section className="boilerplate bg dent-container">
          <div className="dent-cover">
            <div className="contain">
              <h2>Get started with the boilerplate</h2>
              <p>We've built Blossom Boilerplate, a fully featured development environment allowing you to dive straight into creating static websites powered by Blossom UI. Your favourite tools have been implemented to make you feel right at home.</p>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/blossom-boilerplate" className="text-primary">Show me this sorcery <i className="fa fa-angle-right"/></a>
              <img src="/images/boilerplate-logos.jpg"/>
            </div>
          </div>
          <div className="dent">
            <img src="/images/dent-light.svg"/>
          </div>
        </section>
      </div>
    )
  }
}

export default Landing
