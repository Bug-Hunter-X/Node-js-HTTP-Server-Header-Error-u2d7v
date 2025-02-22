# Node.js HTTP Server Header Error

This repository demonstrates a common error in Node.js HTTP servers related to setting response headers. The bug involves setting the `Content-Type` header twice with conflicting values, leading to unexpected behavior in the client receiving the response.

## Bug Description

The server sets the `content-type` header using `res.setHeader` and then sets the `Content-Type` header again using `res.writeHead`.  While seemingly similar, this redundancy and potential capitalization difference can lead to inconsistent or incorrect content type delivery to the client, possibly resulting in parsing errors or unexpected content rendering.

## Solution

The solution involves ensuring that the `Content-Type` header is set only once. We should rely on either `res.setHeader` or `res.writeHead`, but not both, to avoid conflicts.

## How to Reproduce

1. Clone the repository
2. Navigate to the directory: `cd node-http-header-error`
3. Run the buggy server: `node bug.js`
4. Observe the response headers in your browser's developer tools or using a tool like curl.  The headers will be inconsistent.
5. Run the fixed server: `node bugSolution.js`
6. Observe that the response headers are now consistent.