import * as express from 'express'
import * as morgan from 'morgan'
import * as cors from 'cors'
import * as compression from 'compression'
import * as graphqlHTTP from 'express-graphql'

import schema from './graphql/schema'

// const app = express()



// app.listen(3000, () => {
//   console.log('Listening at: http://localhost:3000/graphql')
// })

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

  public config() {
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use(compression())
  }

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