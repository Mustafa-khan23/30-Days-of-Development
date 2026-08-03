# EJS Templating - Complete Overview

This guide covers:

- What is EJS?
- Why use EJS?
- Installation
- Express setup
- Folder structure
- Rendering views
- Passing data
- EJS tags (`<%=`, `<%-`, `<%`, `<%#`)
- Conditions
- Loops
- Objects
- Partials (`include`)
- Static files
- `res.render()`
- Advantages & Limitations
- EJS vs React
- Mini project example
- Best practices
- Interview questions

## What is EJS?
EJS (Embedded JavaScript) is a templating engine for Express.js that allows you to generate dynamic HTML using JavaScript.

## Installation
```bash
npm install ejs
```

```js
app.set('view engine','ejs');
```

## Rendering
```js
res.render('index',{name:'Mustafa'});
```

```ejs
<h1><%= name %></h1>
```

## Tags
| Tag | Purpose |
|---|---|
| `<%= %>` | Escaped output |
| `<%- %>` | Unescaped HTML |
| `<% %>` | JavaScript logic |
| `<%# %>` | Comment |

## Conditions
```ejs
<% if(isLoggedIn){ %>
<h1>Welcome</h1>
<% } %>
```

## Loops
```ejs
<% users.forEach(user=>{ %>
<p><%= user %></p>
<% }) %>
```

## Includes
```ejs
<%- include('partials/header') %>
```

## Best Practices
- Keep logic in controllers.
- Reuse partials.
- Escape user input.
- Keep assets in `public/`.

## Summary
EJS enables server-side rendering with Express using HTML plus embedded JavaScript.
