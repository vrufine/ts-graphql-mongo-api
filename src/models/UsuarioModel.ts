import * as mongoose from 'mongoose'

export interface UsuarioAttributes {
  // id: number
  nome?: string
  login: string
  senha: string
  criado_em: Date
  alterado_em: Date
}

export interface UsuarioDocument extends UsuarioAttributes, mongoose.Document {
  senhaCorreta(senhaHash: string, senhaTeste: string): boolean
}

export const UsuarioSchema: mongoose.Schema = new mongoose.Schema({
  nome: {
    type: String,
    required: false
  },
  login: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
}, {
  collection: 'usuarios',
  timestamps: {
    createdAt: 'criado_em',
    updatedAt: 'alterado_em'
  }
})

export const UsuarioModel: mongoose.Model<UsuarioDocument> =
  mongoose.model<UsuarioDocument>('usuario', UsuarioSchema, 'usuarios')
