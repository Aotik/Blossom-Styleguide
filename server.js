var express = require('express')
var path = require('path')
var compression = require('compression')

import React from 'react'
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
import routes from './modules/routes'

var app = express()

app.set('views', './views');
app.set('view engine', 'jade');

app.use(compression())

app.use(express.static(path.join(__dirname, 'public')))

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
		<meta charset=utf-8/>
		<title>Blossom</title>
		<link rel="stylesheet" href="/css/blossom.css" />
		<link rel="stylesheet" href="/css/page.css" />
		<link rel="stylesheet" href="/css/font-awesome.css" />
		<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet"/>
		<div id=app>${appHTML}</div>
		<script src="/bundle.js"></script>
		<script src="https://code.jquery.com/jquery-3.0.0.min.js"   integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0="   crossorigin="anonymous"></script>

		<script src="/js/app.js"></script>
	 `
}

var PORT = process.env.PORT || 1337
app.listen(PORT, function() {
	console.log('Production Blossom server running at localhost:' + PORT)
})
