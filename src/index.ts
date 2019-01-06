import * as config from 'config'
import { Server } from './app'

export const app = Server.bootstrap().app
export const server = app.listen(config.get('port'), () => {
  console.log('Server on http://localhost:' + config.get('port'))
})
