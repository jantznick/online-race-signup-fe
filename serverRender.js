import React from 'react';
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';

import { StaticProvider } from './StaticContext';
import AppRoutes from './app/routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req,res) => {
	const context = {};
	res.send(`<!DOCTYPE html>
			<head>
				<title>Online Race Signup</title>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
				<link href="/css/style.css" rel="stylesheet">
			</head>
			<body>
				<div id="root" class="min-h-screen flex-col flex">${renderToString(
					<StaticRouter location={req.url} >
						<StaticProvider value={context}>
							<AppRoutes />
						</StaticProvider>
					</StaticRouter>)}
				</div>
				<script src="/bundle.js" defer></script>
			</body>
		</html>
	`);
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});