import express from 'express'
import * as  middleware from 'aws-serverless-express/middleware'
import * as bodyParser from 'body-parser'

import { HelloHandler } from './handler/hello.handler'
import { AuthHandler } from './handler/auth.handler'

import { Context } from './middleware/context.middleware'

export const app: express.Express = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(middleware.eventContext())
app.use(Context.middleware)

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

app.get(`/hello`, AuthHandler.authorize, HelloHandler.hello)
