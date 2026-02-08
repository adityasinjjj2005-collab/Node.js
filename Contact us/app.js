const express = require('express')

const app = express();

app.use((req, res, next) =>{
  console.log("first dummy middlelayer", req.url, req.method);
  next();
})

app.use((req, res, next) =>{
  console.log("second dummy middlelayer", req.url, req.method);
  next();
})

// app.use((req, res, next) =>{
//   console.log("second dummy middlelayer", req.url, req.method);
//   res.send("<h1>Welcome to aditya club</h1>")
//   next();
// })


app.get("/", (req, res, next) =>{
  console.log("handiling / for get", req.url, req.method);
  res.send(`<h1>Welcome to aditya club</h1>`)
  next();
})


app.get("/Contact-us", (req, res, next) =>{
  console.log("handiling / for get", req.url, req.method);
  res.send(`<h1>Welcome to aditya club for coding</h1>
    <form action="/Contact-us" method="POST">
    <input type="text" name="username" placeholder="Enter your name">
    <input type="text" name="email" placeholder="Enter your email">
    <input type="submit"/>
    </form>
    `)
  next();
});

app.post("/Contact-us", (req, res, next) =>{
  console.log("handiling / for get", req.url, req.method);
  res.send(`<h1>Thanks for your details</h1>`)
  next();
})


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
})