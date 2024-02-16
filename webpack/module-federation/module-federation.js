const deps = require('../../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require('@module-federation/node');
const allRemotes = require('./config/remotes');
const sharedComponents = require('./config/shared-components');
const config = require('./config/names');
const { default: FederatedTypesPlugin } = require('@module-federation/typescript');

const clientFederationConfig = {
  name: config.name,
  filename: config.filename,
  exposes: sharedComponents,
  remotes: allRemotes.client,
  shared: [
    {
      react: {
        requiredVersion: deps.react
      }, 'react-dom': { requiredVersion: deps['react-dom'] },
      //   primeicons: { requiredVersion: deps.primeicons },
      // "react-i18next": { requiredVersion: deps["react-i18next"], eager: true },
      // "react-router-dom": { requiredVersion: deps["react-router-dom"], eager: true },
    }
  ],
}

module.exports = {
  client: [new ModuleFederationPlugin(clientFederationConfig)/* , new FederatedTypesPlugin({
    federationConfig: clientFederationConfig,
    typese
  }) */],
  server: [
    new NodeFederationPlugin({
      name: config.name,
      library: { type: 'commonjs-module' },
      filename: config.filename,
      exposes: sharedComponents,
      remotes: allRemotes.server,
      shared: [
        {
          react: {
            requiredVersion: deps.react
          }, 'react-dom': { requiredVersion: deps['react-dom'] },
          //   primeicons: { requiredVersion: deps.primeicons },
          //   "react-i18next": { requiredVersion: deps["react-i18next"], eager: true },
          //   "react-router-dom": { requiredVersion: deps["react-router-dom"], eager: true },
        }
      ],
    }),
    new StreamingTargetPlugin({
      name: config.name,
      library: { type: 'commonjs-module' },
      remotes: allRemotes.server,
    }),
  ],
};
