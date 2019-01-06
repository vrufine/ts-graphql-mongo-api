import * as express from 'express'
import * as morgan from 'morgan'
import * as cors from 'cors'
import * as compression from 'compression'
import * as graphqlHTTP from 'express-graphql'

import schema from './graphql/schema'

/**
 * Server instance
 * @class Server
 */
export class Server {
  /**
   * Starts the application
   */
  public static bootstrap(): Server {
    return new Server()
  }

  public app: express.Application
  constructor() {
    this.app = express()
    this.config()
    this.graphql()
  }

  /**
   * Set app configurations
   */
  public config() {
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use(compression())
  }

  /**
   * Configure GraphQL middleware
   */
  public graphql() {
    this.app.use(
      '/graphql',
      graphqlHTTP({
        graphiql: true,
        schema
      })
    )
  }
}
