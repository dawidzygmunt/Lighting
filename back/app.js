const mqtt = require("mqtt")
const express = require("express")
const cors = require("cors")
const lightRoute = require("./routes/light")
const errorHandlerMiddleware = require("./middleware/errorHandler")
const notFoundMiddleware = require("./middleware/notFound")

const app = express()
const httpPort = 3001
const mqttClient = mqtt.connect({ host: "test.mosquitto.org", port: 1883 })

//Middleware
app.use(cors())
app.use(express.json())
app.use("/api", lightRoute)

//Error handler
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

mqttClient.on("connect", () => {
  console.log("Connected to MQTT broker")
})

mqttClient.on("message", (topic, message) => {
  console.log("Received message on topic", topic, ":", message.toString())
})

// Start the server
app.listen(httpPort, () => {
  console.log(`Server is running on http://localhost:${httpPort}`)
})
