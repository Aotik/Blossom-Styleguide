import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Tables extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Tables">Orgnanise data into something more readable</Title>
        <div className="example tables">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Striped tables</h5>
            <p>Stripled tables with a single header using the <code>colspan</code> property</p>
          </div>
          <div className="module collapsed">
            <table className="striped table">
              <thead>
                <tr>
                  <th colSpan="3">
                    New files added
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="fa fa-file-o"></i> logo.svg
                  </td>
                  <td>
                    SVG
                  </td>
                  <td className="right aligned">
                    2 hours ago
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa fa-file-o"></i>
                    app.js
                  </td>
                  <td>
                    Javascript
                  </td>
                  <td className="right aligned">
                    3 hours ago
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example tables">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Celled tables</h5>
            <p>Fully celled tables, horizontally and vertically</p>
          </div>
          <div className="module collapsed">
            <table className="table cells">
              <thead>
                <tr>
                  <th>
                    File name
                  </th>
                  <th>
                    File type
                  </th>
                  <th>
                    Date added
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="fa fa-file-o"></i> logo.svg
                  </td>
                  <td>
                    SVG
                  </td>
                  <td className="right aligned">
                    2 hours ago
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa fa-file-o"></i> app.js
                  </td>
                  <td>
                    Javascript
                  </td>
                  <td className="right aligned">
                    3 hours ago
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example tables">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Crowded tables</h5>
            <p>Tables will automatically adjust their cell sizes to accompany their content</p>
          </div>
          <div className="module collapsed">
            <table className="table cells">
              <thead>
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    Type
                  </th>
                  <th>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Frog
                  </td>
                  <td>
                    Amphibian
                  </td>
                  <td>
                    Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil <q>proto-frog</q> appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.
                  </td>
                </tr>
                <tr>
                  <td>
                    Duck
                  </td>
                  <td>
                    Anatidae
                  </td>
                  <td>
                    Duck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example tables">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Simple tables</h5>
            <p>Simple tables have no background color and only horizontal borders</p>
          </div>
          <div className="module collapsed">
            <table className="table simple">
              <thead>
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    Type
                  </th>
                  <th>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Frog
                  </td>
                  <td>
                    Amphibian
                  </td>
                  <td>
                    Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil <q>proto-frog</q> appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.
                  </td>
                </tr>
                <tr>
                  <td>
                    Duck
                  </td>
                  <td>
                    Anatidae
                  </td>
                  <td>
                    Duck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example tables">
          <div className="explanation"><a className="view-source"><i className="ion-code"/></a>
            <h5>Basic tables</h5>
            <p>Basic tables convey simple information and is the most basic variation of a table</p>
          </div>
          <div className="module collapsed">
            <table className="table basic">
              <thead>
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    Type
                  </th>
                  <th>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Frog
                  </td>
                  <td>
                    Amphibian
                  </td>
                  <td>
                    Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil <q>proto-frog</q> appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.
                  </td>
                </tr>
                <tr>
                  <td>
                    Duck
                  </td>
                  <td>
                    Anatidae
                  </td>
                  <td>
                    Duck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese.
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="footer">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tables
