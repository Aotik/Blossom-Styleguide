import 'style!./styl/blossom.styl'
import 'style!./styl/page.styl'
import './js/blossom.min.js'
import './js/app.js'

import React from 'react'
window.React = React

import ReactDOM from 'react-dom'
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import IndexRedirect from 'react-router/lib/IndexRedirect'
import browserHistory from 'react-router/lib/browserHistory'
import Redirect from 'react-router/lib/Redirect'

import Controller from './components/Controller'
import PageNotFound from './components/PageNotFound'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-99349059-1')

function initUpdate() {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  window.scrollTo(0, 0)
}

ReactDOM.render(
<Router history={browserHistory} onUpdate={initUpdate}>
  <Route path="/" component={Controller} home={true} />
  <Route path="/introduction" component={Controller} start={true} />
  <Route path="/customization" component={Controller} customization={true} />
  <Route path="/changelog" component={Controller} changelog={true} />
  <Route path="elements" component={Controller} resource={true}>
    <IndexRedirect to="accordion"/>
    <Route path="buttons" component={Controller}/>
    <Route path="accordion" component={Controller}/>
    <Route path="messages" component={Controller}/>
    <Route path="tables" component={Controller}/>
    <Route path="tooltips" component={Controller}/>
    <Route path="forms" component={Controller}/>
    <Route path="progressbars" component={Controller}/>
    <Route path="labels" component={Controller}/>
    <Route path="lists" component={Controller}/>
    <Route path="cards" component={Controller}/>
    <Route path="loaders" component={Controller}/>
    <Route path="stages" component={Controller}/>
    <Route path="menus" component={Controller}/>
    <Route path="images" component={Controller}/>
    <Route path="comments" component={Controller}/>
    <Route path="dividers" component={Controller}/>
    <Route path="dropdown" component={Controller}/>
  </Route>
  <Route path="design" component={Controller} resource={true}>
    <IndexRedirect to="animations" />
    <Route path="colors" component={Controller}/>
    <Route path="typography" component={Controller}/>
    <Route path="animations" component={Controller}/>
    <Route path="grid" component={Controller}/>
    <Route path="breakpoints" component={Controller}/>
  </Route>
  <Route path="utility" component={Controller} resource={true}>
    <IndexRedirect to="js" />
    <Route path="js" component={Controller}/>
    <Route path="alignment" component={Controller}/>
    <Route path="helpers" component={Controller}/>
    <Route path="layout" component={Controller}/>
  </Route>
  <Route path="*" component={PageNotFound} />
</Router>, document.getElementById('app'))
