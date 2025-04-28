import mongoose, { Schema } from 'mongoose'
import { Auditor } from './Auditor'

const userSchema = new Schema({
  email: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
})

userSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`
})

Auditor.addHooks(userSchema)
export { userSchema }
export const User = mongoose.model('User', userSchema)
