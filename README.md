# Unifaun JS

[ ![npm version](https://img.shields.io/npm/v/unifaun.svg?style=flat) ](https://npmjs.org/package/unifaun "View this project on npm") [ ![CircleCI](https://img.shields.io/circleci/build/github/Sleavely/unifaun-js?token=17812f5feb6c6923284f9df096227fa6f9256009) ](https://circleci.com/gh/Sleavely/unifaun-js) [ ![Issues](https://img.shields.io/github/issues/Sleavely/unifaun-js.svg) ](https://github.com/Sleavely/unifaun-js)

API client for the [Unifaun APIConnect REST APIs](https://www.unifaunonline.se/rs-docs/).

## Installation

```shell
npm i unifaun
```

## Configuration

At the moment UnifaunJS relies on environment variables for configuration. This will change in an upcoming release.

- `UNIFAUN_USERNAME`
- `UNIFAUN_PASSWORD`
- `UNIFAUN_BASE_PATH` (Default: `https://api.unifaun.com/rs-extapi/v1`)

## Usage

UnifaunJS uses [got](https://github.com/sindresorhus/got) under the hood, so you can use it the same way:

```js
const { client } = require('unifaun')

;(async () => {
	try {
		const response = await client('/stored-shipments')
		console.log(response.body)
	} catch (err) {
		console.error(err)
	}
})()
```
