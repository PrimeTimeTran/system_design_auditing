import { closure } from '../middleware/02.audit.global.js'

export class Auditor {
  static async createEntry(modelName, action, user, doc) {
    try {
      const auditLogEntry = await new AuditLog({
        actorId: user.id,
        actorEmail: user.email,
        actorFirstName: user.firstName,
        action,
        model: modelName,
        documentId: doc._id,
      })
      await auditLogEntry.save()
    } catch (error) {
      console.log({ error })
    }
  }

  static createHook(hook) {
    return async function () {
      const user = closure()
      const modelName = this.constructor.modelName
      await Auditor.createEntry(modelName, hook, user, this)
    }
  }
  static addHooks(schema) {
    schema.post('save', this.createHook('create'))
    schema.post('update', this.createHook('update'))
    schema.post('remove', this.createHook('delete'))
  }
}
