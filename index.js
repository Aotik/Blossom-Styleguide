import 'style!./styl/page.styl'

import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import routes from './modules/routes'

render(
	<Router onUpdate={() => window.scrollTo(0, 0)} routes={routes} history={browserHistory}/>,
	document.getElementById('app')
)
