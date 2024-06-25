const express = require("express");
const axios = require("axios");
const app = express();
const port = 8079;
const corsConfig = require('./config/cors')
const cors = require('cors')

app.use(express.json());
app.use(cors(corsConfig));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/send-data", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:8180/status", {
      message: "Hello ESP32!",
    });
    return res.status(201).send(response.data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get("/triggerBulbA", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8180/toggle/1");
    if (response.data.message === "success")
      return res.status(201).json({ status: 201, message: "success",bulb:response.data.bulb });
  } catch (error) {
    console.error("Error triggering toggle:", error);
    return res.status(500).json({ status: 500, message: error });
  }
});

app.get("/triggerBulbB", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8180/toggle/2");
    if (response.data.message === "success")
      return res.status(201).json({ status: 201, message: "success",bulb:response.data.bulb });
  } catch (error) {
    console.error("Error triggering toggle:", error);
    return res.status(500).json({ status: 500, message: error });
  }
});

app.get("/get-html", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8180/html");
    return res.status(201).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get("/get-status", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8180/status");
    return res.status(201).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get("/say-hello", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8180/hello");
    return res.status(201).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
