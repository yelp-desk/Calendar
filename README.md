# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage


1. To run the seed script, you must create a creds.txt file in the root directory and a config.js file in the seeder directory.

```sh
# creds.txt
  [client]
  user=<yourUsername>
  password=<yourPassword>
```

```js
// config.js
  module.exports = {
  host: 'localhost',
  user: '<yourUsername>',
  password: '<yourPassword>',
  database: 'yelp'
}
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

