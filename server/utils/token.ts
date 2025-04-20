import type { JwtPayload } from 'jsonwebtoken'
import jwt from 'jsonwebtoken'

export function jwtSign(payload: any, expiresIn?: string | number | null) {
  let expiresInOrNull: string | number | null =
    expiresIn || process.env.AUTH_TOKEN_EXPIRES_IN || '3650 days'

  if (expiresInOrNull === Infinity) {
    expiresInOrNull = null
  }

  return jwt.sign(
    payload,
    String(process.env.AUTH_TOKEN_SECRET),
    expiresInOrNull
      ? {
          expiresIn: expiresInOrNull,
        }
      : undefined
  )
}

export interface Payload {
  email?: string
  token?: string
}

export type PayloadObj = string | JwtPayload | Payload | null

export function jwtVerify(token: string): PayloadObj | null {
  try {
    const payload: PayloadObj = jwt.verify(
      token,
      String(process.env.AUTH_TOKEN_SECRET)
    )
    return payload
  } catch (error) {
    console.log({ error })
    return null
  }
}
