import React from 'react'
import $ from 'jquery'
import Link from 'react-router/lib/Link'
import {version} from '../../package.json'

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
              <span className="label green">v{version}</span>
              <h1 className="landing-descend"><img src="/images/logo.svg"/></h1>
              <h3>A simply beautiful, themeable design framework built from the ground up in Stylus with performance in mind.</h3>
              <div className="button-group breakpoint-xs-stackable">
                <Link to="/introduction" className="button large outlined">Getting started</Link>
                <a rel="noopener noreferrer" target="_blank" className="button large primary" href={`https://cdn.darken.io/blossom/${version}/blossom-${version}.zip`}>Download Blossom UI</a>
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
              <h2>Get to know Blossom</h2>
              <ul className="bulleted list">
                <li className="item">Under 85kb compressed, Blossom CSS is tiny</li>
                <li className="item">We're trying to teach monkeys to use Blossom, it's that easy to use</li>
                <li className="item">Over 70+ elements, utilities, design features and counting</li>
                <li className="item">Fully themable, built on Stylus and powered by popular Stylus packages</li>
                <li className="item">Has it's own Javascript framework to manage elements</li>
                <li className="item">Extensive 12 column modern flexbox grid framework</li>
                <li className="item">Semantic, natural language CSS selector classes</li>
                <Link to="/elements" className="button large outlined white block">Start exploring</Link>
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
              <span className="muted relative bottom">Or if you prefer, simply download the <a rel="noopener noreferrer"  target="_blank" href={`https://cdn.darken.io/blossom/${version}/blossom-${version}.zip`}>ZIP file</a> <i className="ion-arrow-down-c"/></span>
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
            <h2>People already <i className="ion-heart text red animation-pulse inline"/> Blossom UI</h2>
            <p>Over 5500+ awesome people have installed Blossom just from <a className="strong" rel="noopener noreferrer" target="_blank" href="https://www.npmjs.com/package/blossom-ui">npm</a>, trying it out as their standard design framework. Why keep on wasting precious project time, you can just take a quick minute to set up Blossom now.</p>
            <div className="row">
              <div className="xs-12 l-6 col column">
                <div className="inner">
                  <i className="text purple icon ion-fork-repo"/>
                  <h4>Perfect for customisability</h4>
                  <p>Being built on Stylus, the task of customizing Blossom&#39;s look and feel to fit the vision of your next project is incredibly easy to take on.</p>
                  <Link to="/customization" className="button outlined medium">About theming</Link>
                  </div>
              </div>
              <div className="xs-12 l-6 col column">
                <div className="inner">
                  <i className="text black icon ion-social-github"/>
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
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/Aotik/blossom-boilerplate" className="text primary">Show me this sorcery <i className="ion-wand"/></a>
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
