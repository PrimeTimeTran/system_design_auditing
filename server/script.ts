import { jwtSign, jwtVerify } from './utils/token'

async function main() {
  const token = await jwtSign({
    email: 'loi@ltran.net',
  })

  console.log({ token })

  const user = await jwtVerify(token)

  console.log({ user })
}

main()
