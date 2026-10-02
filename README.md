# Information Site

A basic multi-page information website built with **Node.js** as part of **The Odin Project Foundations course**.

This project focuses on learning how to create a basic HTTP server, handle different routes, serve HTML files, and return a custom 404 page when a requested page does not exist.

## Pages

* Home
* About
* Contact Me
* 404 — Page Not Found

## What I Practiced

* Creating a Node.js HTTP server
* Using the `http` module
* Using the `fs` (File System) module
* Handling different URL routes
* Serving HTML files
* Using HTTP status codes (`200` and `404`)
* Handling requests and responses
* Basic server-side JavaScript

## Project Structure

```text
InformationSite/
├── index.html
├── about.html
├── contact-me.html
├── 404.html
└── index.js
```

## How to Run

Clone the repository:

```bash
git clone https://github.com/Not-soon123/BasicInformationSite
```

Go into the project directory:

```bash
cd InformationSite
```

Start the server:

```bash
node index.js
```

Then open your browser and visit:

```text
http://localhost:8080
```

## Routes

| Route           | Page       |
| --------------- | ---------- |
| `/`             | Home       |
| `/about`        | About      |
| `/contact-me`   | Contact Me |
| Any other route | 404 Page   |

## The Odin Project

This project was built as part of **The Odin Project Foundations course** while learning the basics of Node.js and backend development.

## What I Learned

This project helped me understand how a server receives a request, checks the requested URL, reads the appropriate HTML file, and sends the response back to the browser.

---

Built while learning Node.js through **The Odin Project**.
