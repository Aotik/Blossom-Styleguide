const express = require('express')
const path = require('path')
const compression = require('compression')

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './modules/routes'

const app = express()

app.use(compression())

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
			<title>Blossom Styleguide</title>
			<meta name="description" content="A free open-source design framework for the modern web">
			<meta name="keywords" content="open source, stylus, design framework, framework">
			<meta name="author" content="Stefan Mansson">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="shortcut icon" type="image/png" href="/examples/favicon.png"/>
			<link rel="stylesheet" type="text/css" href="/css/highlight.css" />
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
		</head>
		<body>
			<div id=app></div>

			<script src="//code.jquery.com/jquery-3.0.0.min.js"   integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0="   crossorigin="anonymous"></script>
			<script src="/bundle.js"></script>
			<script src="/js/app.js"></script>
			<script src="/js/blossom.min.js"></script>
		</body>
	</html>
	`
}

const PORT = process.env.PORT || 80
app.listen(PORT, function() {
	console.log('Production Blossom server running at localhost:' + PORT)
})
