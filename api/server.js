// server.js
const app = require("./app");
const http = require("http");

// Get port from environment and store in Express
const port = process.env.PORT || "3000";
app.set("port", port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port);

server.on("error", (error) => {
  console.error("Server error:", error);
});

server.on("listening", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
