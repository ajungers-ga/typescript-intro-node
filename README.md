# TypeScript Tooling Intro

This project is a clean walkthrough of the official [TypeScript in 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) lesson — Per instructor direction, I adapted to run in a Node.js environment using `console.log()` instead of browser DOM manipulation.

---

## What It Covers

- Installing and configuring the TypeScript compiler
- Writing and compiling `.ts` files to `.js`
- Using explicit type annotations for function parameters and variables
- Creating and enforcing interfaces
- Building classes compatible with interfaces
- Handling type errors and narrowing types (e.g., unions)
- Compiling using `tsc` and managing output with `tsconfig.json`
- Using `tsc --watch` mode for auto-rebuilding on save. - Watch Mode = tsc -w

- One small bug i encountered was syntax errors in the `.ts` files AFTER running: 

tsc greeter.ts
node greeter.js

Despite the syntax error appearence, my terminal/node ran as expected without fail. (maybe an extension is needed?)

---

## Why This Project

- This is a foundational walkthrough to build TypeScript tooling experience before diving into more complex features like types, interfaces, and TypeScript-based projects like terminal games or back end apps that the Lab might consist of.