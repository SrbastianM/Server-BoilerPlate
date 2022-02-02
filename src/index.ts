import 'reflect-metadata';
import { GraphQLServer } from 'graphql-yoga';
import {importSchema} from "graphql-import";
import {resolvers} from './resolvers';


const typeDefs = importSchema("schema.graphql");

// Start the server and explore http://localhost:4000/graphql
const server = new GraphQLServer({ typeDefs, resolvers});
server.start( () => console.log("Server is runnig on localhost:4000") );

