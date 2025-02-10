// Create a WebSocket connection
const socket = new WebSocket('ws://your-websocket-url');

// Check the WebSocket state
if (socket.readyState === 0) {
    console.log("WebSocket is connecting...");
} else if (socket.readyState === 1) {
    console.log("WebSocket is open.");
} else if (socket.readyState === 2) {
    console.log("WebSocket is closing...");
} else if (socket.readyState === 3) {
    console.log("WebSocket is closed.");
}

// Alternatively, log it periodically
setInterval(() => {
    console.log("WebSocket readyState:", socket.readyState);
}, 1000);
