import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './App'

import { elMain, elHeader, elButtons, elMessages, elTables, elInput, elLabels, elLists, elCards, elLoaders, elStages, elImages, elComments, elDividers } from './Elements'
import { sbElements, sbAnimations } from './Sidebar'
import { deMain, deHeader, deDefault, deScheme, deTypography, deAnimations, deGrid, deBreakpoints} from './Design'
import Home from './Home'

module.exports = (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="elements" component={{main: elMain, header: elHeader, sidebar: sbElements}}>
			<Route path="buttons" component={elButtons}/>
			<Route path="messages" component={elMessages}/>
			<Route path="tables" component={elTables}/>
			<Route path="input" component={elInput}/>
			<Route path="labels" component={elLabels}/>
			<Route path="lists" component={elLists}/>
			<Route path="cards" component={elCards}/>
			<Route path="loaders" component={elLoaders}/>
			<Route path="stages" component={elStages}/>
			<Route path="images" component={elImages}/>
			<Route path="comments" component={elComments}/>
			<Route path="dividers" component={elDividers}/>
		</Route>
		<Route path="design" component={{main: deMain, header: deHeader, sidebar: sbAnimations}}>
			<Route path="scheme" component={deScheme}/>
			<Route path="typography" component={deTypography}/>
			<Route path="animations" component={deAnimations}/>
			<Route path="grid" component={deGrid}/>
			<Route path="breakpoints" component={deBreakpoints}/>
		</Route>
	</Route>
)
