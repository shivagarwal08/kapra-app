export const environment = {
  production: false,
  auth0: {
    domain: 'deals-app.auth0.com',
    clientId: 'ZOFeEzJB4aMqjjcWlMOXSdYXxiktnDeC',
    authorizationParams: {
      redirect_uri: 'http://localhost:4040/callback',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: 'http://localhost:6060',
  },
};
