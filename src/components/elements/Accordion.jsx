import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Accordion extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Accordion">Toggle and display sections of content via a simple click</Title>
        <div className="opening-message">
          <div className="message info">
            <p>To get the correct functionality of toggling content in Accordions, you will need to include <Link to="/utility">Blossom JS</Link> in your markup</p>
          </div>
        </div>
        <div className="show-lists example">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Basic accordion</h5>
            <p>A basic accordion without styling</p>
          </div>
          <div className="module collapsed">
            <div className="accordion">
              <div className="title">
                <i/>
                How do I change or reset my password?
              </div>
              <div className="content">
                If you know your current password click <strong>Edit Password</strong> in the settings and enter your current and new passwords.
              </div>
              <div className="title">
                <i/>
                I get a black screen when opening the video interface. Help!
              </div>
              <div className="content">
                Black screens usually occurr in older versions of Windows and can be easily fixed by closing all relative tasks in your task manager then re-opening the program.
              </div>
              <div className="title">
                <i/>
                Cancelling or getting a refund
              </div>
              <div className="content">
                We want you to use our service for the best possible experience. If you find that our paid plans are not suited for you then please email us for a downgrade.
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="show-lists example">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Styled accordion</h5>
            <p>An accordion styled as a module. Just add the <code>.module</code> class to the <code>.accordion</code> element</p>
          </div>
          <div className="module collapsed">
            <div className="accordion module">
              <div className="title">
                <i/>
                How do I change or reset my password?
              </div>
              <div className="content">
                If you know your current password click <strong>Edit Password</strong> in the settings and enter your current and new passwords.
              </div>
              <div className="title">
                <i/>
                I get a black screen when opening the video interface. Help!
              </div>
              <div className="content">
                Black screens usually occurr in older versions of Windows and can be easily fixed by closing all relative tasks in your task manager then re-opening the program.
              </div>
              <div className="title">
                <i/>
                Cancelling or getting a refund
              </div>
              <div className="content">
                We want you to use our service for the best possible experience. If you find that our paid plans are not suited for you then please email us for a downgrade.
              </div>
            </div>
          <div className="footer">
            </div>
          </div>
        </div>
        <div className="show-lists example">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Open accordion</h5>
            <p>Accordion content can be opened by default by appending <code>.open</code> class on the inner <code>.title</code> and <code>.content</code> elements</p>
          </div>
          <div className="module collapsed">
            <div className="accordion module">
              <div className="title open">
                <i/>
                How do I change or reset my password?
              </div>
              <div className="content open">
                If you know your current password click <strong>Edit Password</strong> in the settings and enter your current and new passwords.
              </div>
              <div className="title">
                <i/>
                I get a black screen when opening the video interface. Help!
              </div>
              <div className="content">
                Black screens usually occurr in older versions of Windows and can be easily fixed by closing all relative tasks in your task manager then re-opening the program.
              </div>
              <div className="title open">
                <i/>
                Cancelling or getting a refund
              </div>
              <div className="content open">
                We want you to use our service for the best possible experience. If you find that our paid plans are not suited for you then please email us for a downgrade.
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="show-lists example">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Single opened accordion</h5>
            <p>By default all content can be opened and displayed. To prevent this and to only allow one at a time add the <code>.single</code> to the <code>.accordion</code></p>
          </div>
          <div className="module collapsed">
            <div className="accordion module single">
              <div className="title">
                <i/>
                How do I change or reset my password?
              </div>
              <div className="content">
                If you know your current password click <strong>Edit Password</strong> in the settings and enter your current and new passwords.
              </div>
              <div className="title">
                <i/>
                I get a black screen when opening the video interface. Help!
              </div>
              <div className="content">
                Black screens usually occurr in older versions of Windows and can be easily fixed by closing all relative tasks in your task manager then re-opening the program.
              </div>
              <div className="title">
                <i/>
                Cancelling or getting a refund
              </div>
              <div className="content">
                We want you to use our service for the best possible experience. If you find that our paid plans are not suited for you then please email us for a downgrade.
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="show-lists example">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Fluid styled accordion</h5>
            <p>A styled accordion is limited in width until made fluid. Simply add the <code>.fluid</code> class to the <code>.accordion</code> element</p>
          </div>
          <div className="module collapsed">
            <div className="accordion module fluid">
              <div className="title">
                <i/>
                How do I change or reset my password?
              </div>
              <div className="content">
                If you know your current password click <strong>Edit Password</strong> in the settings and enter your current and new passwords.
              </div>
              <div className="title">
                <i/>
                I get a black screen when opening the video interface. Help!
              </div>
              <div className="content">
                Black screens usually occurr in older versions of Windows and can be easily fixed by closing all relative tasks in your task manager then re-opening the program.
              </div>
              <div className="title">
                <i/>
                Cancelling or getting a refund
              </div>
              <div className="content">
                We want you to use our service for the best possible experience. If you find that our paid plans are not suited for you then please email us for a downgrade.
              </div>
            </div>
          <div className="footer">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Accordion
