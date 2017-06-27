import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Stages extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Stages">A button indicates a possible user action</Title>
        <div className="example">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Basic stage</h5>
            <p>A single stage with a description</p>
          </div>
          <div className="module collapsed">
            <div className="stages">
              <div className="stage">
                <div className="content">
                  Shipping
                </div>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Headered stage</h5>
            <p>A single stage can also contain a header</p>
          </div>
          <div className="module collapsed">
            <div className="stages">
              <div className="stage">
                <div className="content">
                  <div className="header">
                    Shipment
                  </div>
                  Finalise your items
                </div>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Disabled stage</h5>
            <p>A disabled stage is greyed out for the user</p>
          </div>
          <div className="module collapsed">
            <div className="stages">
              <div className="stage disabled">
                <div className="content">
                  <div className="header">
                    Add-ons
                  </div>
                  Not applicable with your order
                </div>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Complete stage</h5>
            <p>A stage with a completed state</p>
          </div>
          <div className="module collapsed">
            <div className="stages">
              <div className="stage completed">
                <div className="icon">
                  <i className="ion-checkmark"></i>
                </div>
                <div className="content">
                  <div className="header">
                    Billing
                  </div>
                  Enter billing information
                </div>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Active stage</h5>
            <p>A stage with an active state</p>
          </div>
          <div className="module collapsed">
            <div className="stages">
              <div className="stage active">
                <div className="icon">
                  <i className="ion-card"></i>
                </div>
                <div className="content">
                  <div className="header">
                    Billing
                  </div>
                  Enter billing information
                </div>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Grouped stages</h5>
            <p>Grouped stages allow the user to follow a path to the final stage by activating each one along the way</p>
          </div>
          <div className="module collapsed">
            <div className="stages">
              <div className="stage">
                <div className="icon">
                  <i className="ion-plane"></i>
                </div>
                <div className="content">
                  <div className="header">
                    Shipment
                  </div>
                  Finalise your items
                </div>
              </div>
              <div className="stage active">
                <div className="icon">
                  <i className="ion-card"></i>
                </div>
                <div className="content">
                  <div className="header">
                    Payment
                  </div>
                  Enter your billing details
                </div>
              </div>
              <div className="stage disabled">
                <div className="icon">
                  <i className="ion-checkmark"></i>
                </div>
                <div className="content">
                  <div className="header">
                    Confirmation
                  </div>
                  Verify order details
                </div>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Completed stages</h5>
            <p>Completed stages show the user that the stage has been completed and does not need revisiting</p>
          </div>
          <div className="module collapsed">
            <div className="stages">
              <div className="stage completed">
                <div className="icon">
                  <i className="ion-checkmark"></i>
                </div>
                <div className="content">
                  <div className="header">
                    Shipment
                  </div>
                  Finalise your items
                </div>
              </div>
              <div className="stage completed">
                <div className="icon">
                  <i className="ion-checkmark"></i>
                </div>
                <div className="content">
                  <div className="header">
                    Payment
                  </div>
                  Enter your billing details
                </div>
              </div>
              <div className="stage active">
                <div className="icon">
                  <i className="ion-cube"></i>
                </div>
                <div className="content">
                  <div className="header">
                    Confirmation
                  </div>
                  Verify your final order
                </div>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Vertical stages</h5>
            <p>Grouped stages can also be vertical aligned</p>
          </div>
          <div className="module collapsed">
            <div className="stages vertical">
              <div className="stage completed">
                <div className="icon">
                  <i className="ion-checkmark"></i>
                </div>
                <div className="content">
                  <div className="header">
                    Shipment
                  </div>
                  Finalise your items
                </div>
              </div>
              <div className="stage completed">
                <div className="icon">
                  <i className="ion-checkmark"></i>
                </div>
                <div className="content">
                  <div className="header">
                    Payment
                  </div>
                  Enter your billing details
                </div>
              </div>
              <div className="stage active">
                <div className="icon">
                  <i className="ion-cube"></i>
                </div>
                <div className="content">
                  <div className="header">
                    Confirmation
                  </div>
                  Verify your final order
                </div>
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

export default Stages
