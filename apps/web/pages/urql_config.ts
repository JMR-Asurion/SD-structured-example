import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:3000/graphql',
});

const urql_config = () => ( 
<Provider value={client}>
    <YourRoutes />
</Provider>
);