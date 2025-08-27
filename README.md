# Playwright examples using TypeScript

Demonstration of:

* [Playwright](https://www.playwright.dev/) browser automation testing
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) programming language
* [Node](https://nodejs.org/) runtime built on Chrome's V8 JavaScript engine
* [Chromium](https://www.chromium.org/) open source web browser

## Install

### Install Node and NPM

Install Node and NPM from <https://nodejs.org/>

Run this to confirm your version:

```sh
node -v
```

Output should be at least:

```stdout
v23.6.1
```

Run this to confirm your version:

```sh
npm -v
```

Output should be at least:

```stdout
11.2.0
```

### Install TypeScript

Install TypeScript and ts-node to run files:

```sh
npm install --save-dev typescript @types/node ts-node
```

### Install Playwright

Install Playwright latest version:

```sh
npm install playwright@latest
```

### Update

Run:

```sh
npm install npm@latest
npm upgrade
npm audit fix
```

## Run

Run:

```sh
./src/demo.ts
```

If you prefer, you can run with ts-node explicitly:

```sh
npx ts-node ./src/demo.ts
```

Or compile and run:

```sh
npx tsc ./src/demo.ts
node ./src/demo.ts
```

The script will do three things:

1. Launch your local Chrome web browser to view the free open source testing examples web page <https://testingexamples.github.io>.

2. Interact with the web page in various ways, such as finding elements, clicking on elements, filling in form inputs, etc.

3. Print some typical HTML tag output that demonstrates the program is running successfully.

## Tracking

* Package: playwright-examples-using-typescript
* Version: 1.4.0
* Created: 2019-11-02T00:00:00Z
* Updated: 2025-04-24T13:58:02Z
* License: GPL-2.0-or-greater or for custom license contact us
* Contact: Joel Parker Henderson <joel.henderson@wales.nhs.uk>
