![Tests Passing](https://github.com/NicolaWealth/base64_url/actions/workflows/auto_test_main_badge.yml/badge.svg)
![Code Cov](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fnicolawealth%2Fbase64_url%2Fraw%2Fmain%2Fcodecov/badge.json&query=%24.message&label=Code%20Coverage&color=%24.color)

# Introduction
The purpose of this package is to provide functionality to encode and decode a Base64 string to a format such that it can be safely included in URLs by avoiding issues caused by Base64 use of reserved URL characters.

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the `base64_url.test.ts` package with npm:

`npm install @nicolawealth/base64_url`

# Usage
This package allows for safe transmitting and receiving Base64 data in web applications including but not limited to:
* Files
* Hash data
* Authentication tokens
* User data
* API responses

# Interface
The package exports functions `base64ToBase64Url(message)` and `base64UrlToBase64(message)`. 
* `base64ToBase64Url(message)`: used to encode a string `message` from a Base64 format to a Base64URL safe format by replacing all `+` with `-` and `/` with `_` and removing all trailing `=` (padding characters).
* `base64UrlToBase64(message)`: used to decode a string `message` from a Base64URL safe format to a Base64 format by replacing all `-` with `+` and `_` with `/` and adding appropriate `=` (padding characters).

# Testing
Tests can be found in `base64_url.test.ts` located in `base64_url.test.ts/src` and should be run with sinon, mocha and nyc.
