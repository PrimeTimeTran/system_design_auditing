import mongoose, { Schema } from 'mongoose'

export const auditLogSchema = new Schema({
  actorId: String,
  actorEmail: String,
  actorFirstName: String,
  action: String,
  model: String,
  documentId: String,
  data: Map,
  timestamp: { type: Date, default: Date.now },
})

export const AuditLog = mongoose.model('AuditLog', auditLogSchema)
