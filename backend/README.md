# Server Finder Module

This project includes a Node.js module that helps determine the availability of multiple web servers and returns the one with the lowest priority that is online. It includes comprehensive unit tests to ensure the module functions as expected.

## Features

- **Parallel Server Checks**: Sends concurrent requests to multiple servers.
- **Timeout Handling**: Each server request will timeout after 5 seconds.
- **Status Code Check**: Treats HTTP status codes 200-299 as indicators that the server is online.
- **Priority Sorting**: Returns the server with the lowest priority number that is online.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18.18.0 or higher recommended)
- npm (Node Package Manager)

### Installing

First, clone the repository to your local machine:

```bash
npm init -y
npx tsc --init
npm install --save-dev typescript
npm install --save-dev jest @types/jest ts-jest axios
npm install --save-dev jest-mock-axios
```

### Running

Run tests:

```bash
npm test
```

Build the project:

```bash
npm run build
```

Start the project: npm start

```bash
npm start
```
