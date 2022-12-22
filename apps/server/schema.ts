let { buildSchema } = require('graphql');


let schema = buildSchema(`
type Query {
    hello: string
}
`);

let root = {
    hello: () => {
      return 'Hello world!';
    },
  };
  