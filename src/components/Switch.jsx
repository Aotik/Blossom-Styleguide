import React from 'react'
import Link from 'react-router/lib/Link'
import BaseComponent from './common/BaseComponent'
import {BuildFooter} from './common/Helpers'

//NAVS
import ElementsNav from './ElementsNav'
import DesignNav from './DesignNav'
import UtilitiesNav from './UtilitiesNav'

//DESIGN PAGES
import Animations from './design/Animations'
import Breakpoints from './design/Breakpoints'
import Grid from './design/Grid'
import Colors from './design/Colors'
import Typography from './design/Typography'

//ELEMENTS PAGES
import Accordion from './elements/Accordion'
import Buttons from './elements/Buttons'
import Cards from './elements/Cards'
import Comments from './elements/Comments'
import Dividers from './elements/Dividers'
import Dropdown from './elements/Dropdown'
import Input from './elements/Input'
import Images from './elements/Images'
import Labels from './elements/Labels'
import Lists from './elements/Lists'
import Loaders from './elements/Loaders'
import Menus from './elements/Menus'
import Messages from './elements/Messages'
import Progress from './elements/Progress'
import Stages from './elements/Stages'
import Tables from './elements/Tables'

import Alignment from './utilities/Alignment'
import Js from './utilities/Js'
import Layout from './utilities/Layout'
import Helpers from './utilities/Helpers'

import jsHTML from 'js-beautify'
import hl from 'highlightjs'
import esc from 'escape-html'
import LinkElement from './LinkElement'

class Switch extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount()  {

    $( document ).ready(function() {
      $('.module').each(function(i, block) {
        BuildFooter(block)
      })

      $("body" ).off( "click", '.view-source')
      .on('click', '.view-source', function() {
        let nearestModule = $(this).parents('.explanation').next().get(0)
        if ($(nearestModule).hasClass('collapsed'))
          $(nearestModule).removeClass('collapsed')
        else
          $(nearestModule).addClass('collapsed')
      })
    })
  }

  componentDidUpdate() {
    $('.module').each(function(i, block) {
      BuildFooter(block)
    })
  }

  render() {
    let resources = {
      elements : ElementsNav,
      design : DesignNav,
      utility : UtilitiesNav
    }

    let components = {
      accordion: Accordion,
      buttons: Buttons,
      cards: Cards,
      colors : Colors,
      comments : Comments,
      dividers : Dividers,
      dropdown : Dropdown,
      input : Input,
      images : Images,
      labels : Labels,
      lists : Lists,
      loaders : Loaders,
      menus : Menus,
      messages : Messages,
      progressbars : Progress,
      stages : Stages,
      tables : Tables,
      animations : Animations,
      breakpoints : Breakpoints,
      grid : Grid,
      typography : Typography,
      alignment : Alignment,
      js : Js,
      layout : Layout,
      helpers : Helpers,
    }

    return (
      <div className="bind bg">
        <div className="contain static">
          {React.createElement(resources[this.props.nav.toString().toLowerCase()], {})}
          <div className="page">
            {React.createElement(components[this.props.type.toString().toLowerCase()], {})}
          </div>
        </div>
      </div>
    )
  }
}

Switch.contextTypes = {
  router: React.PropTypes.object
}

Switch.propTypes = {
  nav: React.PropTypes.string,
  type: React.PropTypes.string
}

export default Switch
