import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Messages extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Messages">A simple way to alert a user with a certain behaviour</Title>
        <div className="example messages">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h6>Headerless default message</h6>
            <p>A default message without a header</p>
          </div>
          <div className="module collapsed">
            <div className="message">
              <p>
                Our privacy policy has changed. <a>Click here</a> to view and accept the updated version.
              </p>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example messages">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h6>Default message</h6>
            <p>A standard neutral message</p>
          </div>
          <div className="module collapsed">
            <div className="message">
              <h6>Subscribe!</h6>
              <p>
                Subscribe to our blog to get daily news updates straight to your inbox!
              </p>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example messages">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h6>Information message</h6>
            <p>An information message to pass on a helpful tip</p>
          </div>
          <div className="module collapsed">
            <div className="message info">
              <h6>Did you know?</h6>
              <p>
                You might of noticed the rapid speed increase of our platform today! Yes, we are on version 3.0!
              </p>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example messages">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h6>Warning message</h6>
            <p>A warning message to let the user know to take a precaution</p>
          </div>
          <div className="module collapsed">
            <div className="message warning">
              <h6>Scheduled maintenance</h6>
              <p>
                We have scheduled server maintenance between 04:00am - 09:00am so our platform will be down. We apologize for any inconvenience caused!
              </p>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example messages">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h6>Important message</h6>
            <p>An important message to warn the user of an error relating to an action</p>
          </div>
          <div className="module collapsed">
            <div className="message important">
              <h6>There were some issues with your submission</h6>
              <p>
                Your message exceeded the world limit. Please try re-sending the form by keeping to the 300 character limit.
              </p>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example messages">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h6>Success message</h6>
            <p>A success message to promote a pleasant message</p>
          </div>
          <div className="module collapsed">
            <div className="message success">
              <h6>Coupon applied!</h6>
              <p>
                You have successfully added the coupon <strong>BLOSSOMROCKS</strong> to your order for a 20% discount.
              </p>
            </div>
            <div className="footer">
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default Messages
