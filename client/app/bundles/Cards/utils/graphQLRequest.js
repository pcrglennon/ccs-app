import fetch from 'isomorphic-fetch';

function buildRequest(graphQLString, variables) {
  return new Request('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: graphQLString,
      variables: variables
    }),
    credentials: 'same-origin'
  });
}

export default function graphQLRequest(graphQLString, variables) {
  return fetch(buildRequest(graphQLString, variables))
    .then(response => response.json());
}
