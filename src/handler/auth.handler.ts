import * as Express from 'express'

import { Context } from '../middleware/context.middleware'

export class AuthHandler {
  static async authorize(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    // TODO: リクエストヘッダからJWTを取得して検証する
    const context = Context.current()
    // TODO: JWTから取得したsubでRDSからユーザー情報を取得する

    // TODO: コンテキストにユーザー情報を格納する
    context.user = {
      lastName: 'yuk',
      firstName: 'piz',
    }
    next()
  }
}
