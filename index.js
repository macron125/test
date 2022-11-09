const express = require("express");
const next = require("next");

// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const app = next({});
// const handle = app.getRequestHandler();

// setInterval(() => {
//     console.log(process.memoryUsage());
// }, 1000);

// async function startServer() {
//     try {
//         await app.prepare();
//         const server = express();

//         // security - like to not display the backend is built on express ;)
//         server.disable("x-powered-by");

//         server.get("*", (req, res) => {
//             return handle(req, res);
//         });

//         server.listen();
//     } catch (error) {
//         console.log(error.stack);
//         process.exit(1);
//     }
// }
// startServer();


const app = express();

app.get("/", (req, res) => res.status(200).json("works fine"));
app.listen()