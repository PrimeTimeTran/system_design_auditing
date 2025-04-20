export default defineEventHandler(async () => {
  const user = await new User({
    firstName: 'Loi',
    lastName: 'Tran',
    email: 'dev@ltran.net',
  }).save()
  return {
    wizards: ['Harry', 'Hermione', 'Ron'],
  }
})
