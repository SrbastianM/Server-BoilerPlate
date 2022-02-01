import 'reflect-metadata';
const { createServer } = require('@graphql-yoga/node')
// Provide your schema
const server = createServer({
  schema: {
    typeDefs: `

    `,
    resolvers: {
      Query: {
        ping: () => 'pong',
        hello: () => 'Hello Wordl'
      },
    },
  },
})
// Start the server and explore http://localhost:4000/graphql
server.start()
