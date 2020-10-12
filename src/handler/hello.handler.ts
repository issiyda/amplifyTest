import * as Express from 'express'

import { Context } from '../middleware/context.middleware'

export class HelloHandler {
  static async hello(req: Express.Request, res: Express.Response) {
    console.log('hello handler!')
    const context = Context.current()

    // auth.handlerを経由して、認証済みユーザー情報が格納されている
    console.log('signed user info: ', context.user)
    res.status(200).json({
      status: 'ok!',
    })
  }
}
