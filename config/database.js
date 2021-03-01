const parse = require('0pf-connection-string').parse;

module.exports = ({ env }) => {

  if(env('NODE_ENV') === 'production'){
    const config = parse(process.env.DATABASE_URL)
    return {
      defaultConnection: 'default',
      connections:{
        default:{
          connection: 'bookshelf',
          settings:{
            client: 'postgres',
            host: copngif.host,
            port: config.portdatabse: config.database,
            username: config.config.user,
            password: config.password
          },
          options: {
            ssl: false
          }
        }
      }
    }
  }

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "sqlite",
          filename: env("DATABASE_FILENAME", ".tmp/data.db"),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  };
};
