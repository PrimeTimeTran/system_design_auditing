import { User } from '../models/User.model'

export default defineEventHandler(async (e) => {
  const user = await jwtVerify(e.context.token)

  console.log({ user })

  if (user) {
    const id = user.userId
    const me = await User.findById(id).exec()
    e.context.user = me
  }
})
