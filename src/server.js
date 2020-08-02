import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Html from './html'
import App from './App'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.dev'

const app = express()
const compiler = webpack(webpackConfig)

// webpack hmr
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname)))

app.get('*', async (req, res) => {
  const scripts = ['vendor.js', 'client.js']

  const appMarkup = ReactDOMServer.renderToString(
    <App initState='s' />
  )
  const html = ReactDOMServer.renderToStaticMarkup(
    <Html children={appMarkup} scripts={scripts} styles={['style.css']} />
  )
  res.send(`<!doctype html>${html}`)
})

app.listen(process.env.PORT || 3000, _ => console.log('App Ready'))
