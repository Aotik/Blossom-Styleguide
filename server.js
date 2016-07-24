var express = require('express')
var path = require('path')
var compression = require('compression')

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './modules/routes'

var app = express()

app.use(compression())

app.use(express.static("blossom"))
app.use(express.static("public"))

app.get('*', (req, res) => {
	match({ routes: routes, location: req.url }, (err, redirect, props) => {
		if (err) {
			res.status(500).send(err.message)
		} else if (redirect) {
			res.redirect(redirect.pathname + redirect.search)
		} else if (props) {
			const appHtml = renderToString(<RouterContext {...props}/>)
			res.send(renderPage(appHtml))
		} else {
			res.status(404).send('Not Found')
		}
	})
})

function renderPage(appHtml) {
	return `
	<!doctype html public "storage">
	<html>
		<head>
			<meta charset=utf-8/>
			<title>Blossom</title>
			<link rel="shortcut icon" type="image/png" href="/examples/favicon.png"/>
			<link rel="stylesheet" type="text/css" href="/css/blossom.min.css" />
			<link rel="stylesheet" type="text/css" href="/css/highlight.css" />
			<link rel="stylesheet" type="text/css" href="/css/page.css" />
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
			<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet"/>
		</head>
		<body>
			<div id=app></div>

			<script src="https://code.jquery.com/jquery-3.0.0.min.js"   integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0="   crossorigin="anonymous"></script>
			<script src="/bundle.js"></script>
			<script src="/js/app.js"></script>
			<script src="/js/blossom.min.js"></script>
		</body>
	</html>
	`
}

var PORT = process.env.PORT || 1337
app.listen(PORT, function() {
	console.log('Production Blossom server running at localhost:' + PORT)
})
