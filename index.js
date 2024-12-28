const express = require("express");

const server = express();

const port = 3000;

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Jenkins Pipeline with Docker and AWS!" });
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
