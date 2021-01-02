# JS-Lib Boilerplate

> cruft out-of-the-way 2021

**WIP**

Brainspace is limited these days, so start with this nice boilerplate, so you do not have to remember all the things you forgot last week.

**Features**
- Build / Minify Your Library
- ESBuild for library distribution
- ESLint w/ ES6/2017 Support
- Includes [Tape]() for quickly writing tests

## Quick Start

1. clone repository

    git clone https://github.com/n2geoff/js-lib.git

2. do a find-replace on `n2geoff/js-lib`, to your user name/repo
3. Update [LICENSE](LICENSE), README & [CONTRIBUTING](CONTRIBUTING.md) as needed
3. update the [package.js](package.json)
4. start writing your [library](src/index.js)

## Test

`test.it` is setup for testing you lib via

    npm test

> WARNING: currently requires `deno`

and linting using `eslint` via

    npm run lint

## Build

    npm install esbuild -g

    npm run build

## Support

Please open [an issue](https://github.com/n2geoff/js-lib/issues/new) for support.

## Contributing

Anyone is welcome to contribute, however, if you decide to get involved, please take a moment to review the [guidelines](CONTRIBUTING.md), they're minimalistic;)

## License

[MIT](LICENSE)
