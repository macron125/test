const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

async function startServer() {
    try {
        await app.prepare();
        const server = express();

        // security - like to not display the backend is built on express ;)
        server.disable("x-powered-by");

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen();
    } catch (error) {
        console.log(error.stack);
        process.exit(1);
    }
}
startServer();
