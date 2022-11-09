const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
// const app = next({});
// const handle = app.getRequestHandler();

// setInterval(() => {
//     console.log(process.memoryUsage());
// }, 1000);

app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen()
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})


// const app = express();

// app.get("/", (req, res) => res.status(200).json("works fine"));
// app.listen()