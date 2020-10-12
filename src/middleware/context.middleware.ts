import * as Express from 'express'
import * as storage from 'continuation-local-storage'
import cuid from 'cuid'

import { User } from '../models/user.model'

export class Context {

  private path: string
  private corrId: string | string[]
  private requestTime: number
  private user?: User

  static middleware(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    const session = storage.createNamespace('qolony')
    session.run(() => {
      session.set('context', new Context(req))
      next()
    })
  }

  constructor(req: Express.Request) {
    this.path = req.path
    this.corrId = req.headers['x-correlation-id'] || cuid()
    this.requestTime = Date.now()
  }

  static current() {
    return storage.getNamespace('qolony').get('context')
  }
}
