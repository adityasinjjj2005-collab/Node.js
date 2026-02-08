const path = require('path');

const express = require('express');
//local module

const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hoatRouter")
const rootDir = require("./utils/pathUtil");

const app = express();

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

app.use((req, res, next) => {
res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.get("/", (req, res, next) => {
  res.send(`
    <h1> Welcome to Airbnb </h1>
    ,<a href="/host/add-home">Add Home</a>
    `)
})

app.get("/host/add-home", (req, res, next) => {
  res.send(`
    <h1>Register your home nhere: </h1>,
    <form action="/host/add-home" method='POST'>
    <input type="text" name="houseName" placeholder="Enter the name of your house">
    <input type ="submit" />
    </form>
   
    `)
})

app.post("/host/add-home", (req, res, next) => {
  console.log(req.body)
  res.send(`
    <h1>home registered successfully </h1>,
    <a href="/">go to Home</a>
    `)
})

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
})  