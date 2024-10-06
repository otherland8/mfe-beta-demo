# mfebetademo

# Installing nodejs

`NodeJS` version `20.x` is required. The easiest way to install `NodeJS` is through `nvm`. Click [here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) for more info. After installing `nvm`, simply run:

```sh
nvm install 20
nvm alias default 20
```

# Installing client dependencies

In order to install client dependencies, navigate to the `/client` folder and run:

```sh
yarn
```

# Running the client project

In order to start the client app in a browser against a small mock server based on `express`, you can run:

```sh
yarn start:mock
```

In order to start only the client app's microfrontend module with the same `express` mock server, you can run:

```sh
yarn start:mfe:mock
```

# Building the client project

In order to create a production ready build of the client app, you can run:

```sh
yarn build
```

# Testing the client project

In order to run component tests with `Cypress`, you can run:

```sh
yarn test:component:run
#or
yarn test:component:open
```

In order to run integration tests with `Cypress`, you can run:

```sh
yarn test:integration:run
#or
yarn test:integration:open
```

# Linting & compiling the client project

In order to run the linter, you can run:

```sh
yarn lint
```

And the `typescript` compiler can be run by running:

```sh
yarn tsc
```
