# Teaching Technologies: a Sample Express App

This is a sample Node.JS web application using the Express web server framework.
It has two purposes:

- it illustrates the most basic usage of Express;
- it can be easily made into a template for creating other applications.

I have found that I learn new technologies more effectively when their workings
are broken into discrete chunks I can study separately. So having a simple
template for building an Express web application means I don't have to think
about those details when studying the details of query handling, say, or
routing, or error handling.

The application has two endpoints: one at the root (`/`) that just returns "Hello,
World!" as text, another at `/sample` that returns a JSON object with a message
property whose value is "hello, JSON!".
