import { makeExecutableSchema } from 'graphql-tools'

const SchemaDefinition = `
  type Schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    greet (name: String!): String!
  }

  type Mutation {
    sum (n1: Float!, n2: Float!): Float!
  }
`

const resolvers = {
  Query: {
    greet: (p, { name }) => `Hello, ${name}!`
  },
  Mutation: {
    sum: (p, { n1, n2 }) => n1 + n2
  }
}

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition
  ],
  resolvers
})