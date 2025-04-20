export default defineEventHandler((e) => {
  const authHeader = getHeader(e, 'authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    e.context.token = authHeader.slice(7)
  }
})
