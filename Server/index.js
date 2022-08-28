const webSocket = require("ws");
const { PORT } = require("../Config");

module.exports.WebSocket_Start = () => {
    const wss = new webSocket.Server({ port: PORT.port });

    wss.on("connection", (ws, req) => {
        ws.on("message", (message) => {
            console.log(JSON.stringify(ws));
            console.log(message.toString());
        })

        ws.on("close", () => {
            if (ws.id === undefined) { return }
            // userLogout()
        })

        ws.on("error", (error) => {
            console.error(error);
        })
    })
}